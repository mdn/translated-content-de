---
title: In Firefox 3.6 verschobene Schnittstellen
slug: Mozilla/Firefox/Releases/3.6/Interfaces_moved
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Diese Schnittstellen wurden in Gecko 1.9.2 an neue Positionen im Baum verschoben. Dies ist im Allgemeinen nur für Personen interessant, die an der Entwicklung von Mozilla direkt beteiligt sind.

## Verschobene DOM-Schnittstellen

Die folgenden Schnittstellen wurden von `dom/public/idl/base/` zu `dom/interfaces/base/` verschoben:

| Von                        | Zu                       |
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

Die folgenden Schnittstellen wurden von `dom/public/idl/core/` zu `dom/interfaces/core/` verschoben:

| Von                  | Zu                            |
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

Diese Schnittstellen wurden von `dom/public/idl/css/` zu `dom/interfaces/css/` verschoben:

| Von                           | Zu                         |
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

Die folgenden Schnittstellen wurden von `dom/public/idl/events/` zu `dom/interfaces/events/` verschoben:

| Von                         | Zu                         |
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

Diese Schnittstellen wurden von `dom/public/idl/geolocation/` zu `/dom/interfaces/geolocation/` verschoben:

| Von                         | Zu                               |
| --------------------------- | -------------------------------- |
| `nsIDOMGeoGeolocation`      | `nsIDOMGeoPosition`              |
| `nsIDOMGeoPositionCallback` | `nsIDOMGeoPositionCoords`        |
| `nsIDOMGeoPositionError`    | `nsIDOMGeoPositionErrorCallback` |
| `nsIDOMGeoPositionOptions`  | `nsIDOMNavigatorGeolocation`     |
| `nsIGeolocationProvider`    | `nsIGeolocationProvider`         |

Diese Schnittstellen wurden von `dom/public/idl/html/` zu `/dom/interfaces/html/` verschoben:

| Von                           | Zu                            |
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

Die folgenden Schnittstellen wurden von `dom/public/idl/json/` zu `dom/interfaces/json/` verschoben:

| Von       | Zu        |
| --------- | --------- |
| `nsIJSON` | `nsIJSON` |

Die folgenden Schnittstellen wurden von `dom/public/idl/ls/` zu `dom/interfaces/load-save/` verschoben:

| Von                         | Zu                         |
| --------------------------- | -------------------------- |
| `nsIDOMDOMImplementationLS` | `nsIDOMLSException`        |
| `nsIDOMLSInput`             | `nsIDOMLSLoadEvent`        |
| `nsIDOMLSOutput`            | `nsIDOMLSParser`           |
| `nsIDOMLSParserFilter`      | `nsIDOMLSProgressEvent`    |
| `nsIDOMLSResourceResolver`  | `nsIDOMLSSerializer`       |
| `nsIDOMLSSerializerFilter`  | `nsIDOMLSSerializerFilter` |

Die folgenden Schnittstellen wurden von `dom/public/idl/offline/` zu `dom/interfaces/offline/` verschoben:

| Von                         | Zu                          |
| --------------------------- | --------------------------- |
| `nsIDOMLoadStatus`          | `nsIDOMLoadStatusEvent`     |
| `nsIDOMOfflineResourceList` | `nsIDOMOfflineResourceList` |

Diese Schnittstellen wurden von `dom/public/idl/range/` zu `dom/interfaces/range/` verschoben:

| Von                   | Zu                     |
| --------------------- | ---------------------- |
| `nsIDOMDocumentRange` | `nsIDOMNSRange`        |
| `nsIDOMRange`         | `nsIDOMRangeException` |

Diese Schnittstelle wurde von `dom/public/idl/smil` zu `dom/interfaces/smil/` verschoben:

| Von                        | Zu                         |
| -------------------------- | -------------------------- |
| `nsIDOMElementTimeControl` | `nsIDOMElementTimeControl` |

Die folgenden Schnittstellen wurden von `dom/public/idl/storage/` zu `dom/interfaces/storage/` verschoben:

| Von                    | Zu                    |
| ---------------------- | --------------------- |
| `nsIDOMStorage`        | `nsIDOMStorageEvent`  |
| `nsIDOMStorageItem`    | `nsIDOMStorageList`   |
| `nsIDOMStorageManager` | `nsIDOMStorageWindow` |
| `nsIDOMToString`       | `nsIDOMToString`      |

Die folgenden Schnittstellen wurden von `dom/public/idl/stylesheets/` zu `dom/interfaces/stylesheets/` verschoben:

| Von                   | Zu                      |
| --------------------- | ----------------------- |
| `nsIDOMDocumentStyle` | `nsIDOMLinkStyle`       |
| `nsIDOMMediaList`     | `nsIDOMNSDocumentStyle` |
| `nsIDOMStyleSheet`    | `nsIDOMStyleSheetList`  |

Die folgenden Schnittstellen wurden von `dom/public/idl/svg/` zu `dom/interfaces/svg/` verschoben:

| Von                                | Zu                          |
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

Die IDL-Dateien für DOM-Arbeiter wurden ebenfalls verschoben, von `dom/public/idl/threads/` zu `dom/interfaces/threads/`:

| Von                                                  | Zu                  |
| ---------------------------------------------------- | ------------------- |
| `nsIDOMWorkers.idl` (enthält mehrere Schnittstellen) | `nsIDOMWorkers.idl` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/traversal/` zu `dom/interfaces/traversal/` verschoben:

| Von                       | Zu                 |
| ------------------------- | ------------------ |
| `nsIDOMDocumentTraversal` | `nsIDOMNodeFilter` |
| `nsIDOMNodeIterator`      | `nsIDOMTreeWalker` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/views/` zu `dom/interfaces/views/` verschoben:

| Von                  | Zu                   |
| -------------------- | -------------------- |
| `nsIDOMAbstractView` | `nsIDOMDocumentView` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/xbl/` zu `dom/interfaces/xbl/` verschoben:

| Von                 | Zu                  |
| ------------------- | ------------------- |
| `nsIDOMDocumentXBL` | `nsIDOMDocumentXBL` |

Die folgenden IDL-Dateien wurden von `dom/public/idl/xpath/` zu `dom/interfaces/xpath/` verschoben:

| Von                       | Zu                      |
| ------------------------- | ----------------------- |
| `nsIDOMNSXPathExpression` | `nsIDOMXPathEvaluator`  |
| `nsIDOMXPathException`    | `nsIDOMXPathExpression` |
| `nsIDOMXPathNSResolver`   | `nsIDOMXPathNamespace`  |
| `nsIDOMXPathResult`       | `nsIDOMXPathResult`     |

Die folgenden IDL-Dateien wurden von `dom/public/idl/xul/` zu `dom/interfaces/xul/` verschoben:

| Von                           | Zu                           |
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
