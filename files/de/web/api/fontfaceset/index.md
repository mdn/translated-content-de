---
title: FontFaceSet
slug: Web/API/FontFaceSet
l10n:
  sourceCommit: e89ed8e9ab638ff45f7915f9d22b8b44118bef85
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFaceSet`**-Schnittstelle der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) verwaltet das Laden von Schriftarten und die Abfrage ihres Download-Status.

Eine `FontFaceSet`-Instanz ist ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von [`FontFace`](/de/docs/Web/API/FontFace)-Objekten enthalten kann.

Diese Eigenschaft ist im [`Document.fonts`](/de/docs/Web/API/Document/fonts) oder `self.fonts` in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`FontFaceSet.status`](/de/docs/Web/API/FontFaceSet/status) {{ReadOnlyInline}}
  - : Gibt den Ladezustand der Schriftart an. Es wird entweder `'loading'` oder `'loaded'` sein.
- [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) {{ReadOnlyInline}}
  - : {{jsxref("Promise")}}, das aufgelöst wird, sobald das Laden und die Layout-Operationen der Schrift abgeschlossen sind.
- [`FontFaceSet.size`](/de/docs/Web/API/FontFaceSet/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Werte im `FontFaceSet` zurück.

### Ereignisse

- [`loading`](/de/docs/Web/API/FontFaceSet/loading_event)
  - : Wird ausgelöst, wenn ein Fontface-Set begonnen hat, zu laden.
- [`loadingdone`](/de/docs/Web/API/FontFaceSet/loadingdone_event)
  - : Wird ausgelöst, wenn ein Font-Face-Set das Laden abgeschlossen hat.
- [`loadingerror`](/de/docs/Web/API/FontFaceSet/loadingerror_event)
  - : Wird ausgelöst, wenn ein Fehler beim Laden eines Font-Face-Sets aufgetreten ist.

## Instanz-Methoden

- [`FontFaceSet.add()`](/de/docs/Web/API/FontFaceSet/add)
  - : Fügt dem Schriftensatz eine Schrift hinzu.
- [`FontFaceSet.check()`](/de/docs/Web/API/FontFaceSet/check)
  - : Ein boolescher Wert, der anzeigt, ob eine Schrift geladen ist, aber keinen Ladevorgang startet, wenn sie es nicht ist.
- [`FontFaceSet.clear()`](/de/docs/Web/API/FontFaceSet/clear)
  - : Entfernt alle manuell hinzugefügten Schriften aus dem Schriftensatz. [CSS-verbundene](https://www.w3.org/TR/css-font-loading-3/#css-connected) Schriften sind nicht betroffen.
- [`FontFaceSet.delete()`](/de/docs/Web/API/FontFaceSet/delete)
  - : Entfernt eine manuell hinzugefügte Schrift aus dem Schriftensatz. [CSS-verbundene](https://www.w3.org/TR/css-font-loading-3/#css-connected) Schriften sind nicht betroffen.
- [`FontFaceSet.entries()`](/de/docs/Web/API/FontFaceSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `FontFaceSet` in Einfüge-Reihenfolge zurück.
- [`FontFaceSet.forEach()`](/de/docs/Web/API/FontFaceSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `FontFaceSet`-Objekt aus.
- [`FontFaceSet.has()`](/de/docs/Web/API/FontFaceSet/has)
  - : Gibt einen {{jsxref("Boolean")}} zurück, der bestätigt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- [`FontFaceSet.keys()`](/de/docs/Web/API/FontFaceSet/keys)
  - : Ein Alias für [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values).
- [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das eine Liste von Font-Faces für eine angeforderte Schrift auflöst.
- [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `FontFaceSet`-Objekt in Einfüge-Reihenfolge liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
