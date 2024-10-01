---
title: Interfaces in Firefox 3.6 verschoben
slug: Mozilla/Firefox/Releases/3.6/Interfaces_moved
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

Diese Schnittstellen wurden in Gecko 1.9.2 an neue Orte im Baum verschoben. Dies ist im Allgemeinen nur für Personen von Interesse, die an der Entwicklung von Mozilla selbst arbeiten.

## Verschobene DOM-Schnittstellen

Die folgenden Schnittstellen wurden von `dom/public/idl/base/` nach `dom/interfaces/base/` verschoben:

| Von                        | Nach                     |
| -------------------------- | ------------------------ |
| `nsIBrowserDOMWindow`      | `nsIDOMBarProp`          |
| `nsIDOMCRMFObject`         | `nsIDOMChromeWindow`     |
| `nsIDOMClientInformation`  | `nsIDOMClientRect`       |
| `nsIDOMClientRectList`     | `nsIDOMConstructor`      |
| `nsIDOMCrypto`             | `nsIDOMHistory`          |
| `nsIDOMJSWindow`           | `nsIDOMLocation`         |
| `nsIDOMMimeType`           | `nsIDOMMimeTypeArray`    |
| `nsIDOMModalContentWindow` | `nsIDOMNSFeatureFactory` |
| `nsIDOMNavigator`          | `nsIDOMPkcs11`           |
| `nsIDOMPlugin`             | `nsIDOMPluginArray`      |
| `nsIDOMScreen`             | `nsIDOMWindow`           |
| `nsIDOMWindow2`            | `nsIDOMWindowCollection` |
| `nsIDOMWindowInternal`     | `nsIDOMWindowUtils`      |

Die folgenden Schnittstellen wurden von `dom/public/idl/core/` nach `dom/interfaces/core/` verschoben:

| Von                  | Nach                          |
| -------------------- | ----------------------------- |
| `nsIDOM3Attr`        | `nsIDOM3Document`             |
| `nsIDOM3Node`        | `nsIDOM3Text`                 |
| `nsIDOM3TypeInfo`    | `nsIDOMAttr`                  |
| `nsIDOMCDATASection` | `nsIDOMCharacterData`         |
| `nsIDOMComment`      | `nsIDOMDOMConfiguration`      |
| `nsIDOMDOMError`     | `nsIDOMDOMErrorHandler`       |
| `nsIDOMDOMException` | `nsIDOMDOMImplementation`     |
| `nsIDOMDOMLocator`   | `nsIDOMDOMStringList`         |
| `nsIDOMDocument`     | `nsIDOMDocumentFragment`      |
| `nsIDOMDocumentType` | `nsIDOMElement`               |
| `nsIDOMEntity`       | `nsIDOMEntityReference`       |
| `nsIDOMNSDocument`   | `nsIDOMNSEditableElement`     |
| `nsIDOMNSElement`    | `nsIDOMNameList`              |
| `nsIDOMNamedNodeMap` | `nsIDOMNode`                  |
| `nsIDOMNodeList`     | `nsIDOMNodeSelector`          |
| `nsIDOMNotation`     | `nsIDOMProcessingInstruction` |
| `nsIDOMText`         | `nsIDOMUserDataHandler`       |
| `nsIDOMXMLDocument`  |                               |

Diese Schnittstellen wurden von `dom/public/idl/css/` nach `dom/interfaces/css/` verschoben:

| Von                           | Nach                       |
| ----------------------------- | -------------------------- |
| `nsIDOMCSS2Properties`        | `nsIDOMCSSCharsetRule`     |
| `nsIDOMCSSFontFaceRule`       | `nsIDOMCSSImportRule`      |
| `nsIDOMCSSMediaRule`          | `nsIDOMCSSMozDocumentRule` |
| `nsIDOMCSSPageRule`           | `nsIDOMCSSPrimitiveValue`  |
| `nsIDOMCSSRule`               | `nsIDOMCSSRuleList`        |
| `nsIDOMCSSStyleDeclaration`   | `nsIDOMCSSStyleRule`       |
| `nsIDOMCSSStyleSheet`         | `nsIDOMCSSUnknownRule`     |
| `nsIDOMCSSValue`              | `nsIDOMCSSValueList`       |
| `nsIDOMCounter`               | `nsIDOMDocumentCSS`        |
| `nsIDOMElementCSSInlineStyle` | `nsIDOMNSCSS2Properties`   |
| `nsIDOMNSRGBAColor`           | `nsIDOMRGBColor`           |
| `nsIDOMRect`                  | `nsIDOMViewCSS`            |

Die folgenden Schnittstellen wurden von `dom/public/idl/events/` nach `dom/interfaces/events/` verschoben:

| Von                         | Nach                       |
| --------------------------- | -------------------------- |
| `nsIDOM3DocumentEvent`      | `nsIDOM3EventTarget`       |
| `nsIDOMBeforeUnloadEvent`   | `nsIDOMCommandEvent`       |
| `nsIDOMDataContainerEvent`  | `nsIDOMDataTransfer`       |
| `nsIDOMDocumentEvent`       | `nsIDOMDragEvent`          |
| `nsIDOMEvent`               | `nsIDOMEventGroup`         |
| `nsIDOMEventListener`       | `nsIDOMEventTarget`        |
| `nsIDOMKeyEvent`            | `nsIDOMMessageEvent`       |
| `nsIDOMMouseEvent`          | `nsIDOMMouseScrollEvent`   |
| `nsIDOMMutationEvent`       | `nsIDOMNSEvent`            |
| `nsIDOMNSEventTarget`       | `nsIDOMNSMouseEvent`       |
| `nsIDOMNSUIEvent`           | `nsIDOMNotifyPaintEvent`   |
| `nsIDOMPageTransitionEvent` | `nsIDOMPopupBlockedEvent`  |
| `nsIDOMProgressEvent`       | `nsIDOMSimpleGestureEvent` |
| `nsIDOMSmartCardEvent`      | `nsIDOMUIEvent`            |

Diese Schnittstellen wurden von `dom/public/idl/geolocation/` nach `/dom/interfaces/geolocation/` verschoben:

| Von                         | Nach                             |
| --------------------------- | -------------------------------- |
| `nsIDOMGeoGeolocation`      | `nsIDOMGeoPosition`              |
| `nsIDOMGeoPositionCallback` | `nsIDOMGeoPositionCoords`        |
| `nsIDOMGeoPositionError`    | `nsIDOMGeoPositionErrorCallback` |
| `nsIDOMGeoPositionOptions`  | `nsIDOMNavigatorGeolocation`     |
| `nsIGeolocationProvider`    | `nsIGeolocationProvider`         |

Diese Schnittstellen wurden von `dom/public/idl/html/` nach `/dom/interfaces/html/` verschoben:

| Von                           | Nach                          |
| ----------------------------- | ----------------------------- |
| `nsIDOMHTMLAnchorElement`     | `nsIDOMHTMLAppletElement`     |
| `nsIDOMHTMLAreaElement`       | `nsIDOMHTMLAudioElement`      |
| `nsIDOMHTMLBRElement`         | `nsIDOMHTMLBaseElement`       |
| `nsIDOMHTMLBaseFontElement`   | `nsIDOMHTMLBodyElement`       |
| `nsIDOMHTMLButtonElement`     | `nsIDOMHTMLByteRanges`        |
| `nsIDOMHTMLCanvasElement`     | `nsIDOMHTMLCollection`        |
| `nsIDOMHTMLDListElement`      | `nsIDOMHTMLDirectoryElement`  |
| `nsIDOMHTMLDivElement`        | `nsIDOMHTMLDocument`          |
| `nsIDOMHTMLElement`           | `nsIDOMHTMLEmbedElement`      |
| `nsIDOMHTMLFieldSetElement`   | `nsIDOMHTMLFontElement`       |
| `nsIDOMHTMLFormElement`       | `nsIDOMHTMLFrameElement`      |
| `nsIDOMHTMLFrameSetElement`   | `nsIDOMHTMLHRElement`         |
| `nsIDOMHTMLHeadElement`       | `nsIDOMHTMLHeadingElement`    |
| `nsIDOMHTMLHtmlElement`       | `nsIDOMHTMLIFrameElement`     |
| `nsIDOMHTMLImageElement`      | `nsIDOMHTMLInputElement`      |
| `nsIDOMHTMLIsIndexElement`    | `nsIDOMHTMLLIElement`         |
| `nsIDOMHTMLLabelElement`      | `nsIDOMHTMLLegendElement`     |
| `nsIDOMHTMLLinkElement`       | `nsIDOMHTMLMapElement`        |
| `nsIDOMHTMLMediaElement`      | `nsIDOMHTMLMediaError`        |
| `nsIDOMHTMLMenuElement`       | `nsIDOMHTMLMetaElement`       |
| `nsIDOMHTMLModElement`        | `nsIDOMHTMLOListElement`      |
| `nsIDOMHTMLObjectElement`     | `nsIDOMHTMLOptGroupElement`   |
| `nsIDOMHTMLOptionElement`     | `nsIDOMHTMLOptionsCollection` |
| `nsIDOMHTMLParagraphElement`  | `nsIDOMHTMLParamElement`      |
| `nsIDOMHTMLPreElement`        | `nsIDOMHTMLQuoteElement`      |
| `nsIDOMHTMLScriptElement`     | `nsIDOMHTMLSelectElement`     |
| `nsIDOMHTMLSourceElement`     | `nsIDOMHTMLStyleElement`      |
| `nsIDOMHTMLTableCaptionElem`  | `nsIDOMHTMLTableCellElement`  |
| `nsIDOMHTMLTableColElement`   | `nsIDOMHTMLTableElement`      |
| `nsIDOMHTMLTableRowElement`   | `nsIDOMHTMLTableSectionElem`  |
| `nsIDOMHTMLTextAreaElement`   | `nsIDOMHTMLTimeRanges`        |
| `nsIDOMHTMLTitleElement`      | `nsIDOMHTMLUListElement`      |
| `nsIDOMHTMLVideoElement`      | `nsIDOMHTMLVoidCallback`      |
| `nsIDOMNSHTMLAnchorElement`   | `nsIDOMNSHTMLAnchorElement2`  |
| `nsIDOMNSHTMLAreaElement`     | `nsIDOMNSHTMLAreaElement2`    |
| `nsIDOMNSHTMLButtonElement`   | `nsIDOMNSHTMLDocument`        |
| `nsIDOMNSHTMLElement`         | `nsIDOMNSHTMLFormControlList` |
| `nsIDOMNSHTMLFormElement`     | `nsIDOMNSHTMLFrameElement`    |
| `nsIDOMNSHTMLHRElement`       | `nsIDOMNSHTMLImageElement`    |
| `nsIDOMNSHTMLInputElement`    | `nsIDOMNSHTMLOptionCollectn`  |
| `nsIDOMNSHTMLOptionElement`   | `nsIDOMNSHTMLSelectElement`   |
| `nsIDOMNSHTMLTextAreaElement` | `nsIDOMNSXBLFormControl`      |

Die folgenden Schnittstellen wurden von `dom/public/idl/json/` nach `dom/interfaces/json/` verschoben:

| Von       | Nach      |
| --------- | --------- |
| `nsIJSON` | `nsIJSON` |

Die folgenden Schnittstellen wurden von `dom/public/idl/ls/` nach `dom/interfaces/load-save/` verschoben:

| Von                         | Nach                       |
| --------------------------- | -------------------------- |
| `nsIDOMDOMImplementationLS` | `nsIDOMLSException`        |
| `nsIDOMLSInput`             | `nsIDOMLSLoadEvent`        |
| `nsIDOMLSOutput`            | `nsIDOMLSParser`           |
| `nsIDOMLSParserFilter`      | `nsIDOMLSProgressEvent`    |
| `nsIDOMLSResourceResolver`  | `nsIDOMLSSerializer`       |
| `nsIDOMLSSerializerFilter`  | `nsIDOMLSSerializerFilter` |

Die folgenden Schnittstellen wurden von `dom/public/idl/offline/` nach `dom/interfaces/offline/` verschoben:

| Von                         | Nach                        |
| --------------------------- | --------------------------- |
| `nsIDOMLoadStatus`          | `nsIDOMLoadStatusEvent`     |
| `nsIDOMOfflineResourceList` | `nsIDOMOfflineResourceList` |

Diese Schnittstellen wurden von `dom/public/idl/range/` nach `dom/interfaces/range/` verschoben:

| Von                   | Nach                   |
| --------------------- | ---------------------- |
| `nsIDOMDocumentRange` | `nsIDOMNSRange`        |
| `nsIDOMRange`         | `nsIDOMRangeException` |

Diese Schnittstelle wurde von `dom/public/idl/smil` nach `dom/interfaces/smil/` verschoben:

| Von                        | Nach                       |
| -------------------------- | -------------------------- |
| `nsIDOMElementTimeControl` | `nsIDOMElementTimeControl` |

Die folgenden Schnittstellen wurden von `dom/public/idl/storage/` nach `dom/interfaces/storage/` verschoben:

| Von                    | Nach                  |
| ---------------------- | --------------------- |
| `nsIDOMStorage`        | `nsIDOMStorageEvent`  |
| `nsIDOMStorageItem`    | `nsIDOMStorageList`   |
| `nsIDOMStorageManager` | `nsIDOMStorageWindow` |
| `nsIDOMToString`       | `nsIDOMToString`      |

Die folgenden Schnittstellen wurden von `dom/public/idl/stylesheets/` nach `dom/interfaces/stylesheets/` verschoben:

| Von                   | Nach                    |
| --------------------- | ----------------------- |
| `nsIDOMDocumentStyle` | `nsIDOMLinkStyle`       |
| `nsIDOMMediaList`     | `nsIDOMNSDocumentStyle` |
| `nsIDOMStyleSheet`    | `nsIDOMStyleSheetList`  |

Die folgenden Schnittstellen wurden von `dom/public/idl/svg/` nach `dom/interfaces/svg/` verschoben:

| Von                                | Nach                        |
| ---------------------------------- | --------------------------- |
| `nsIDOMGetSVGDocument`             | `nsIDOMSVGAElement`         |
| `nsIDOMSVGAngle`                   | `nsIDOMSVGAnimPresAspRatio` |
| `nsIDOMSVGAnimTransformList`       | `nsIDOMSVGAnimateElement`   |
| `nsIDOMSVGAnimateTransformElement` | `nsIDOMSVGAnimatedAngle`    |
| `nsIDOMSVGAnimatedBoolean`         | `nsIDOMSVGAnimatedEnum`     |
| `nsIDOMSVGAnimatedInteger`         | `nsIDOMSVGAnimatedLength`   |
| `nsIDOMSVGAnimatedLengthList`      | `nsIDOMSVGAnimatedNumber`   |
| `nsIDOMSVGAnimatedNumberList`      | `nsIDOMSVGAnimatedPathData` |
| `nsIDOMSVGAnimatedPoints`          | `nsIDOMSVGAnimatedRect`     |
| `nsIDOMSVGAnimatedString`          | `nsIDOMSVGAnimationElement` |
| `nsIDOMSVGCircleElement`           | `nsIDOMSVGClipPathElement`  |
| `nsIDOMSVGDefsElement`             | `nsIDOMSVGDescElement`      |
| `nsIDOMSVGDocument`                | `nsIDOMSVGElement`          |
| `nsIDOMSVGEllipseElement`          | `nsIDOMSVGEvent`            |
| `nsIDOMSVGException`               | `nsIDOMSVGFilterElement`    |
| `nsIDOMSVGFilters`                 | `nsIDOMSVGFitToViewBox`     |
| `nsIDOMSVGForeignObjectElem`       | `nsIDOMSVGGElement`         |
| `nsIDOMSVGGradientElement`         | `nsIDOMSVGImageElement`     |
| `nsIDOMSVGLength`                  | `nsIDOMSVGLengthList`       |
| `nsIDOMSVGLineElement`             | `nsIDOMSVGLocatable`        |
| `nsIDOMSVGMarkerElement`           | `nsIDOMSVGMaskElement`      |
| `nsIDOMSVGMatrix`                  | `nsIDOMSVGMetadataElement`  |
| `nsIDOMSVGNumber`                  | `nsIDOMSVGNumberList`       |
| `nsIDOMSVGPathElement`             | `nsIDOMSVGPathSeg`          |
| `nsIDOMSVGPathSegList`             | `nsIDOMSVGPatternElement`   |
| `nsIDOMSVGPoint`                   | `nsIDOMSVGPointList`        |
| `nsIDOMSVGPolygonElement`          | `nsIDOMSVGPolylineElement`  |
| `nsIDOMSVGPresAspectRatio`         | `nsIDOMSVGRect`             |
| `nsIDOMSVGRectElement`             | `nsIDOMSVGSVGElement`       |
| `nsIDOMSVGScriptElement`           | `nsIDOMSVGSetElement`       |
| `nsIDOMSVGStopElement`             | `nsIDOMSVGStylable`         |
| `nsIDOMSVGStyleElement`            | `nsIDOMSVGSwitchElement`    |
| `nsIDOMSVGSymbolElement`           | `nsIDOMSVGTSpanElement`     |
| `nsIDOMSVGTextContentElement`      | `nsIDOMSVGTextElement`      |
| `nsIDOMSVGTextPathElement`         | `nsIDOMSVGTextPositionElem` |
| `nsIDOMSVGTitleElement`            | `nsIDOMSVGTransform`        |
| `nsIDOMSVGTransformList`           | `nsIDOMSVGTransformable`    |
| `nsIDOMSVGURIReference`            | `nsIDOMSVGUnitTypes`        |
| `nsIDOMSVGUseElement`              | `nsIDOMSVGViewSpec`         |
| `nsIDOMSVGZoomAndPan`              | `nsIDOMSVGZoomEvent`        |

Auch die IDL-Dateien für DOM-Arbeiter wurden verschoben, von `dom/public/idl/threads/` nach `dom/interfaces/threads/`:

| Von                                                  | Nach                |
| ---------------------------------------------------- | ------------------- |
| `nsIDOMWorkers.idl` (enthält mehrere Schnittstellen) | `nsIDOMWorkers.idl` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/traversal/` nach `dom/interfaces/traversal/` verschoben:

| Von                       | Nach               |
| ------------------------- | ------------------ |
| `nsIDOMDocumentTraversal` | `nsIDOMNodeFilter` |
| `nsIDOMNodeIterator`      | `nsIDOMTreeWalker` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/views/` nach `dom/interfaces/views/` verschoben:

| Von                  | Nach                 |
| -------------------- | -------------------- |
| `nsIDOMAbstractView` | `nsIDOMDocumentView` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/xbl/` nach `dom/interfaces/xbl/` verschoben:

| Von                 | Nach                |
| ------------------- | ------------------- |
| `nsIDOMDocumentXBL` | `nsIDOMDocumentXBL` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/xpath/` nach `dom/interfaces/xpath/` verschoben:

| Von                       | Nach                    |
| ------------------------- | ----------------------- |
| `nsIDOMNSXPathExpression` | `nsIDOMXPathEvaluator`  |
| `nsIDOMXPathException`    | `nsIDOMXPathExpression` |
| `nsIDOMXPathNSResolver`   | `nsIDOMXPathNamespace`  |
| `nsIDOMXPathResult`       | `nsIDOMXPathResult`     |

Die folgenden IDL-Dateien wurden von `dom/public/idl/xul/` nach `dom/interfaces/xul/` verschoben:

| Von                           | Nach                         |
| ----------------------------- | ---------------------------- |
| `nsIDOMXULButtonElement`      | `nsIDOMXULCheckboxElement`   |
| `nsIDOMXULCommandDispatcher`  | `nsIDOMXULCommandEvent`      |
| `nsIDOMXULContainerElement`   | `nsIDOMXULControlElement`    |
| `nsIDOMXULDescriptionElement` | `nsIDOMXULDocument`          |
| `nsIDOMXULElement`            | `nsIDOMXULImageElement`      |
| `nsIDOMXULLabelElement`       | `nsIDOMXULLabeledControlEl`  |
| `nsIDOMXULMenuListElement`    | `nsIDOMXULMultSelectCntrlEl` |
| `nsIDOMXULPopupElement`       | `nsIDOMXULSelectCntrlEl`     |
| `nsIDOMXULSelectCntrlItemEl`  | `nsIDOMXULTextboxElement`    |
| `nsIDOMXULTreeElement`        | `nsIDOMXULTreeElement`       |
