/// <reference types="preact" />

import { JSX as PreactJSX } from "preact"

declare global {
  namespace JSX {
    interface IntrinsicElements extends PreactJSX.IntrinsicElements { }
    interface Element extends PreactJSX.Element { }
    interface ElementType extends PreactJSX.ElementType { }
    interface ElementClass extends PreactJSX.ElementClass { }
    interface ElementAttributesProperty extends PreactJSX.ElementAttributesProperty { }
    interface ElementChildrenAttribute extends PreactJSX.ElementChildrenAttribute { }
    interface IntrinsicAttributes extends PreactJSX.IntrinsicAttributes { }
    interface IntrinsicClassAttributes<T> extends PreactJSX.IntrinsicClassAttributes<T> { }
  }

  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K] | UIEvent): void
  }
  interface Window {
    spaNavigate(url: URL, isBack: boolean = false)
    addCleanup(fn: (...args: any[]) => void)
  }
}

export { }
