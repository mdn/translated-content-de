---
title: MutationEvent
slug: Web/API/MutationEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`MutationEvent`**-Schnittstelle bietet Ereigniseigenschaften, die spezifisch für Änderungen an der Document Object Model (DOM)-Hierarchie und den Knoten sind.

> [!NOTE]
> Die Verwendung von _Mutationsereignissen_ ist problematisch:
>
> - Ihr Design ist [fehlerhaft](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html).
> - Das Hinzufügen von DOM-Mutations-Listenern zu einem Dokument [beeinträchtigt die Leistung erheblich](https://groups.google.com/g/mozilla.dev.platform/c/L0Lx11u5Bvs?pli=1) bei weiteren DOM-Änderungen an diesem Dokument (sie werden 1,5 bis 7-mal langsamer!). Außerdem wird der Schaden durch das Entfernen der Listener nicht rückgängig gemacht.
> - Sie haben eine schlechte Browser-Kompatibilität: Safari unterstützt `DOMAttrModified` nicht (siehe [WebKit-Bug 8191](https://webkit.org/b/8191)) und Firefox unterstützt _Mutations-Namen-Ereignisse_ nicht (wie `DOMElementNameChanged` und `DOMAttributeNameChanged`).
>
> Sie wurden zugunsten von [Mutation Observers](/de/docs/Web/API/MutationObserver) veraltet erklärt. **Erwägen Sie die Verwendung dieser.**

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt an, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Es kann `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`) sein. Für andere Ereignisse hat es keine Bedeutung und wird dann auf `0` gesetzt.
- [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt den Namen des Knoten an, der durch das `DOMAttrModified`-Ereignis betroffen ist. Für andere Ereignisse hat es keine Bedeutung und wird dann auf die leere Zeichenkette (`""`) gesetzt.
- [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Enthält bei `DOMAttrModified`-Ereignissen den neuen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den neuen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird die leere Zeichenkette (`""`) zurückgegeben.
- [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Enthält bei `DOMAttrModified`-Ereignissen den vorherigen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den vorherigen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird die leere Zeichenkette (`""`) zurückgegeben.
- [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt den mit dem Ereignis verbundenen Knoten an, wie etwa den geänderten Knoten innerhalb des Teilbaums für `DOMSubtreeModified`.

## Instanz-Methoden

- [`MutationEvent.initMutationEvent()`](/de/docs/Web/API/MutationEvent/initMutationEvent) {{Deprecated_Inline}}
  - : Konstruktormethode, die ein neues `MutationEvent` mit den angegebenen Parametern zurückgibt.

## Liste der Mutationsereignisse

Im Folgenden finden Sie eine Liste aller Mutationsereignisse:

- `DOMAttrModified` (Nicht von Safari unterstützt)
- `DOMAttributeNameChanged` (Nicht von Firefox unterstützt)
- `DOMCharacterDataModified`
- `DOMElementNameChanged` (Nicht von Firefox unterstützt)
- `DOMNodeInserted`
- `DOMNodeInsertedIntoDocument`
- `DOMNodeRemoved`
- `DOMNodeRemovedFromDocument`
- `DOMSubtreeModified`

## Beispiele

Sie können einen Listener für Mutationsereignisse registrieren, indem Sie [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wie folgt verwenden:

```js
element.addEventListener(
  "DOMNodeInserted",
  (event) => {
    // …
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MutationObserver`](/de/docs/Web/API/MutationObserver)
