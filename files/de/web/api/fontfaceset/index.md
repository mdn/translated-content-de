---
title: FontFaceSet
slug: Web/API/FontFaceSet
l10n:
  sourceCommit: e89ed8e9ab638ff45f7915f9d22b8b44118bef85
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFaceSet`**-Schnittstelle der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) verwaltet das Laden von Schriftarten und die Abfrage ihres Download-Status.

Eine `FontFaceSet`-Instanz ist ein [objektähnliches `Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von [`FontFace`](/de/docs/Web/API/FontFace)-Objekten enthalten kann.

Diese Eigenschaft ist verfügbar als [`Document.fonts`](/de/docs/Web/API/Document/fonts) oder `self.fonts` in [Web-Workern](/de/docs/Web/API/Web_Workers_API).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`FontFaceSet.status`](/de/docs/Web/API/FontFaceSet/status) {{ReadOnlyInline}}
  - : Gibt den Ladezustand der Schriftart an. Er wird entweder `'loading'` oder `'loaded'` sein.
- [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, der sich auflöst, sobald die Schriftlade- und Layoutoperationen abgeschlossen sind.
- [`FontFaceSet.size`](/de/docs/Web/API/FontFaceSet/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Werte im `FontFaceSet` zurück.

### Ereignisse

- [`loading`](/de/docs/Web/API/FontFaceSet/loading_event)
  - : Wird ausgelöst, wenn ein Schriftarten-Set zu laden beginnt.
- [`loadingdone`](/de/docs/Web/API/FontFaceSet/loadingdone_event)
  - : Wird ausgelöst, wenn das Laden eines Schriftarten-Sets abgeschlossen ist.
- [`loadingerror`](/de/docs/Web/API/FontFaceSet/loadingerror_event)
  - : Wird ausgelöst, wenn beim Laden eines Schriftarten-Sets ein Fehler aufgetreten ist.

## Instanz-Methoden

- [`FontFaceSet.add()`](/de/docs/Web/API/FontFaceSet/add)
  - : Fügt eine Schriftart zum Schriftarten-Set hinzu.
- [`FontFaceSet.check()`](/de/docs/Web/API/FontFaceSet/check)
  - : Ein boolescher Wert, der angibt, ob eine Schriftart geladen ist, ohne einen Ladevorgang zu initiieren, wenn sie es nicht ist.
- [`FontFaceSet.clear()`](/de/docs/Web/API/FontFaceSet/clear)
  - : Entfernt alle manuell hinzugefügten Schriftarten aus dem Schriftarten-Set. [CSS-verbundene](https://www.w3.org/TR/css-font-loading-3/#css-connected) Schriftarten bleiben unberührt.
- [`FontFaceSet.delete()`](/de/docs/Web/API/FontFaceSet/delete)
  - : Entfernt eine manuell hinzugefügte Schriftart aus dem Schriftarten-Set. [CSS-verbundene](https://www.w3.org/TR/css-font-loading-3/#css-connected) Schriftarten bleiben unberührt.
- [`FontFaceSet.entries()`](/de/docs/Web/API/FontFaceSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `FontFaceSet` in Einfügereihenfolge zurück.
- [`FontFaceSet.forEach()`](/de/docs/Web/API/FontFaceSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `FontFaceSet`-Objekt aus.
- [`FontFaceSet.has()`](/de/docs/Web/API/FontFaceSet/has)
  - : Gibt einen {{jsxref("Boolean")}} zurück, der angibt, ob ein Element mit dem gegebenen Wert vorhanden ist.
- [`FontFaceSet.keys()`](/de/docs/Web/API/FontFaceSet/keys)
  - : Ein Alias für [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values).
- [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich in eine Liste von Schriftarten für eine angeforderte Schriftart auflöst.
- [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `FontFaceSet`-Objekt in Einfügereihenfolge liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
