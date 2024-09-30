---
title: MutationEvent
slug: Web/API/MutationEvent
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Die **`MutationEvent`**-Schnittstelle stellt Ereigniseigenschaften bereit, die spezifisch für Änderungen an der Document Object Model (DOM)-Hierarchie und den Knoten sind.

> [!NOTE]
> Die Verwendung von _Mutation Events_ ist problematisch:
>
> - Ihr Design ist [fehlerhaft](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html).
> - Das Hinzufügen von DOM-Mutations-Listenern zu einem Dokument [verschlechtert die Leistung](https://groups.google.com/g/mozilla.dev.platform/c/L0Lx11u5Bvs?pli=1) weiterer DOM-Änderungen in diesem Dokument erheblich (sie werden 1,5- bis 7-mal langsamer!). Darüber hinaus wird der Schaden durch das Entfernen der Listener nicht rückgängig gemacht.
> - Sie haben schlechte plattformübergreifende Browser-Kompatibilität: Safari unterstützt `DOMAttrModified` nicht (siehe [WebKit Bug 8191](https://webkit.org/b/8191)) und Firefox unterstützt keine _Mutation Name Events_ (wie `DOMElementNameChanged` und `DOMAttributeNameChanged`).
>
> Sie wurden zugunsten von [Mutation Observers](/de/docs/Web/API/MutationObserver) als veraltet markiert. **Bitte verwenden Sie stattdessen diese.**

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt an, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Es kann `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`) sein. Es hat für andere Ereignisse keine Bedeutung und wird dann auf `0` gesetzt.
- [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt den Namen des Knotens an, der durch das `DOMAttrModified`-Ereignis betroffen ist. Für andere Ereignisse hat es keine Bedeutung und wird dann auf den leeren String (`""`) gesetzt.
- [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Enthält bei `DOMAttrModified`-Ereignissen den neuen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den neuen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.
- [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Enthält bei `DOMAttrModified`-Ereignissen den vorherigen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält es den vorherigen neuen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen wird der leere String (`""`) zurückgegeben.
- [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt den mit dem Ereignis verbundenen Knoten an, wie den geänderten Knoten innerhalb der Unterstruktur für `DOMSubtreeModified`.

## Instanz-Methoden

- [`MutationEvent.initMutationEvent()`](/de/docs/Web/API/MutationEvent/initMutationEvent) {{Deprecated_Inline}}
  - : Konstruktormethode, die ein neues `MutationEvent` mit den gegebenen Parametern konfiguriert zurückgibt.

## Liste der Mutation Events

Die folgende Liste enthält alle Mutation Events:

- `DOMAttrModified` (Nicht unterstützt von Safari)
- `DOMAttributeNameChanged` (Nicht unterstützt von Firefox)
- `DOMCharacterDataModified`
- `DOMElementNameChanged` (Nicht unterstützt von Firefox)
- `DOMNodeInserted`
- `DOMNodeInsertedIntoDocument`
- `DOMNodeRemoved`
- `DOMNodeRemovedFromDocument`
- `DOMSubtreeModified`

## Beispiele

Sie können einen Listener für Mutation Events registrieren, indem Sie [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) wie folgt verwenden:

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
