---
title: FontFaceSet
slug: Web/API/FontFaceSet
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das **`FontFaceSet`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) verwaltet das Laden von Schriftarten und die Abfrage ihres Downloadstatus.

Eine `FontFaceSet`-Instanz ist ein [‘Set’-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von [`FontFace`](/de/docs/Web/API/FontFace)-Objekten enthalten kann.

Diese Eigenschaft ist verfügbar als [`Document.fonts`](/de/docs/Web/API/Document/fonts) oder `self.fonts` in [Web-Worker](/de/docs/Web/API/Web_Workers_API).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`FontFaceSet.status`](/de/docs/Web/API/FontFaceSet/status) {{ReadOnlyInline}}
  - : Gibt den Ladezustand der Schriftart an. Es wird entweder `'loading'` oder `'loaded'` sein.
- [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) {{ReadOnlyInline}}
  - : {{jsxref("Promise")}}, das aufgelöst wird, sobald Schriftladen und Layoutoperationen abgeschlossen sind.
- [`FontFaceSet.size`](/de/docs/Web/API/FontFaceSet/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Werte im `FontFaceSet` zurück.

### Ereignisse

- [`loading`](/de/docs/Web/API/FontFaceSet/loading_event)
  - : Wird ausgelöst, wenn das Laden eines FontFace-Sets begonnen hat.
- [`loadingdone`](/de/docs/Web/API/FontFaceSet/loadingdone_event)
  - : Wird ausgelöst, wenn das Laden eines FontFace-Sets beendet ist.
- [`loadingerror`](/de/docs/Web/API/FontFaceSet/loadingerror_event)
  - : Wird ausgelöst, wenn ein Fehler beim Laden eines FontFace-Sets aufgetreten ist.

## Instanzmethoden

- [`FontFaceSet.add()`](/de/docs/Web/API/FontFaceSet/add)
  - : Fügt dem Schrifensatz eine Schriftart hinzu.
- [`FontFaceSet.check()`](/de/docs/Web/API/FontFaceSet/check)
  - : Ein Boolean-Wert, der angibt, ob eine Schriftart geladen ist, jedoch nicht das Laden initiiert, wenn sie nicht geladen ist.
- [`FontFaceSet.clear()`](/de/docs/Web/API/FontFaceSet/clear)
  - : Entfernt alle manuell hinzugefügten Schriftarten aus dem Schrifensatz. [CSS-verbundene](https://drafts.csswg.org/css-font-loading-3/#css-connected) Schriftarten sind nicht betroffen.
- [`FontFaceSet.delete()`](/de/docs/Web/API/FontFaceSet/delete)
  - : Entfernt eine manuell hinzugefügte Schriftart aus dem Schrifensatz. [CSS-verbundene](https://drafts.csswg.org/css-font-loading-3/#css-connected) Schriftarten sind nicht betroffen.
- [`FontFaceSet.entries()`](/de/docs/Web/API/FontFaceSet/entries)
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `FontFaceSet` in Einfügereihenfolge zurück.
- [`FontFaceSet.forEach()`](/de/docs/Web/API/FontFaceSet/forEach)
  - : Führt eine bereitgestellte Funktion für jeden Wert im `FontFaceSet`-Objekt aus.
- [`FontFaceSet.has()`](/de/docs/Web/API/FontFaceSet/has)
  - : Gibt ein {{jsxref("Boolean")}} zurück, das angibt, ob ein Element mit dem gegebenen Wert vorhanden ist.
- [`FontFaceSet.keys()`](/de/docs/Web/API/FontFaceSet/keys)
  - : Ein Alias für [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values).
- [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das eine Liste von Schriftarten für eine angeforderte Schriftart auflöst.
- [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values)
  - : Gibt ein neues Iterator-Objekt zurück, das die Werte für jedes Element im `FontFaceSet`-Objekt in Einfügereihenfolge liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
