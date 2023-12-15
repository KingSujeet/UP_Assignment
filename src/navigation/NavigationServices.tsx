import * as React from "react";

export const NavigationRef = React.createRef<any>();

export function navigate(name: string, params: Object) {
  if (NavigationRef.current) {
    NavigationRef.current.navigate(name, params);
  }
}

export function resetRoot(rootName: string, params: Object) {
  if (NavigationRef.current) {
    NavigationRef.current.resetRoot({
      index: 0,
      routes: [{ name: rootName, params: params }],
    });
  }
}

export function nestedNavigate(root: any, child: any, params: Object) {
  if (NavigationRef.current) {
    NavigationRef.current.navigate(root, { screen: child, params: params });
  }
}

export function goBack() {
  if (NavigationRef.current) {
    NavigationRef.current.goBack();
  }
}

export function toggleDrawer() {
  if (NavigationRef.current) {
    NavigationRef.current.toggleDrawer();
  }
}
