---
title: MutationEvent
slug: Web/API/MutationEvent
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("UI Events")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`MutationEvent`**-Schnittstelle bietet Ereigniseigenschaften, die spezifisch für Änderungen an der Document Object Model (DOM)-Hierarchie und -Knoten sind.

> [!NOTE]
> Die Verwendung von _Mutationsevents_ ist problematisch:
>
> - Ihr Design ist [fehlerhaft](https://lists.w3.org/Archives/Public/public-webapps/2011JulSep/0779.html).
> - Das Hinzufügen von DOM-Mutations-Listenern zu einem Dokument [verschlechtert die Leistung erheblich](https://groups.google.com/g/mozilla.dev.platform/c/L0Lx11u5Bvs?pli=1) weiterer DOM-Änderungen an diesem Dokument (sie werden 1,5 - 7 Mal langsamer!). Darüber hinaus behebt das Entfernen der Listener den Schaden nicht.
> - Sie haben eine schlechte plattformübergreifende Kompatibilität: Safari unterstützt `DOMAttrModified` nicht (siehe [WebKit-Fehler 8191](https://webkit.org/b/8191)) und Firefox unterstützt keine _Mutationsnamen-Ereignisse_ (wie `DOMElementNameChanged` und `DOMAttributeNameChanged`).
>
> Sie wurden zugunsten von [Mutation Observers](/de/docs/Web/API/MutationObserver) veraltet. **Überlegen Sie, stattdessen diese zu verwenden.**

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`MutationEvent.attrChange`](/de/docs/Web/API/MutationEvent/attrChange) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt an, welche Art von Änderung das `DOMAttrModified`-Ereignis ausgelöst hat. Es kann `MODIFICATION` (`1`), `ADDITION` (`2`) oder `REMOVAL` (`3`) sein. Für andere Ereignisse hat es keine Bedeutung und ist dann auf `0` gesetzt.
- [`MutationEvent.attrName`](/de/docs/Web/API/MutationEvent/attrName) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Namen des Knotens an, der vom `DOMAttrModified`-Ereignis betroffen ist. Für andere Ereignisse hat es keine Bedeutung und ist dann auf den leeren String (`""`) gesetzt.
- [`MutationEvent.newValue`](/de/docs/Web/API/MutationEvent/newValue) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Bei `DOMAttrModified`-Ereignissen enthält den neuen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält den neuen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen zurückgegeben als leerer String (`""`).
- [`MutationEvent.prevValue`](/de/docs/Web/API/MutationEvent/prevValue) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Bei `DOMAttrModified`-Ereignissen enthält den vorherigen Wert des modifizierten [`Attr`](/de/docs/Web/API/Attr)-Knotens. Bei `DOMCharacterDataModified`-Ereignissen enthält den vorherigen Wert des modifizierten [`CharacterData`](/de/docs/Web/API/CharacterData)-Knotens. In allen anderen Fällen zurückgegeben als leerer String (`""`).
- [`MutationEvent.relatedNode`](/de/docs/Web/API/MutationEvent/relatedNode) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den Knoten an, der sich auf das Ereignis bezieht, wie etwa der geänderte Knoten innerhalb des Unterbaums für `DOMSubtreeModified`.

## Instanzen-Methoden

- [`MutationEvent.initMutationEvent()`](/de/docs/Web/API/MutationEvent/initMutationEvent) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Konstruktor-Methode, die ein neues `MutationEvent` mit den angegebenen Parametern konfiguriert zurückgibt.

## Liste der Mutationsereignisse

Die folgende Liste zeigt alle Mutationsereignisse:

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
element.addEventListener("DOMNodeInserted", (event) => {
  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MutationObserver`](/de/docs/Web/API/MutationObserver)
