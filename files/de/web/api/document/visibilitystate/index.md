---
title: "Document: visibilityState-Eigenschaft"
short-title: visibilityState
slug: Web/API/Document/visibilityState
l10n:
  sourceCommit: 14a752ccdcaa736e8e368156c48bca61a3c1e5ed
---

{{ApiRef("DOM")}}

Die **`Document.visibilityState`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Sichtbarkeit des Dokuments zurückgibt. Sie kann verwendet werden, um zu überprüfen, ob das Dokument im Hintergrund oder in einem minimierten Fenster ist oder anderweitig für den Benutzer nicht sichtbar ist.

Wenn sich der Wert dieser Eigenschaft ändert, wird das {{domxref("Document/visibilitychange_event", "visibilitychange")}}-Ereignis an das {{domxref("Document")}} gesendet.

Die {{domxref("Document.hidden")}}-Eigenschaft bietet eine alternative Möglichkeit, um festzustellen, ob die Seite verborgen ist.

## Wert

Ein String mit einem der folgenden Werte:

- `visible`
  - : Der Seiteninhalt kann zumindest teilweise sichtbar sein. In der Praxis bedeutet dies, dass die
    Seite die Vordergrund-Registerkarte eines nicht minimierten Fensters ist.
- `hidden`
  - : Der Seiteninhalt ist für den Benutzer nicht sichtbar. In der Praxis bedeutet dies, dass das
    Dokument entweder eine Hintergrund-Registerkarte ist oder Teil eines minimierten Fensters, oder dass die OS-Bildschirmsperre aktiv ist.

## Beispiele

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  // Verhalten anpassen…
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.hidden")}}
- [Page Visibility API](/de/docs/Web/API/Page_Visibility_API)
