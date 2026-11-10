---
title: FontFaceSet
slug: Web/API/FontFaceSet
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die Schnittstelle **`FontFaceSet`** der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) verwaltet das Laden von Schriftarten und ermöglicht es, deren Downloadstatus abzufragen.

Eine `FontFaceSet`-Instanz ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Menge von [`FontFace`](/de/docs/Web/API/FontFace)-Objekten enthalten kann.

Sie ist über [`Document.fonts`](/de/docs/Web/API/Document/fonts) oder über `self.fonts` in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`FontFaceSet.status`](/de/docs/Web/API/FontFaceSet/status) {{ReadOnlyInline}}
  - : Gibt den Ladestatus der Schriftarten an. Der Wert ist entweder `'loading'` oder `'loaded'`.
- [`FontFaceSet.ready`](/de/docs/Web/API/FontFaceSet/ready) {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, sobald das Laden der Schriftarten und die Layoutvorgänge abgeschlossen sind.
- [`FontFaceSet.size`](/de/docs/Web/API/FontFaceSet/size) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Werte im `FontFaceSet` zurück.

## Instanzmethoden

- [`FontFaceSet.add()`](/de/docs/Web/API/FontFaceSet/add)
  - : Fügt der Schriftartenmenge eine Schriftart hinzu.
- [`FontFaceSet.check()`](/de/docs/Web/API/FontFaceSet/check)
  - : Gibt einen booleschen Wert zurück, der angibt, ob eine Schriftart geladen ist. Ist sie nicht geladen, wird dadurch kein Ladevorgang gestartet.
- [`FontFaceSet.clear()`](/de/docs/Web/API/FontFaceSet/clear)
  - : Entfernt alle manuell hinzugefügten Schriftarten aus der Schriftartenmenge. [Mit CSS verknüpfte](https://drafts.csswg.org/css-font-loading-3/#css-connected) Schriftarten bleiben davon unberührt.
- [`FontFaceSet.delete()`](/de/docs/Web/API/FontFaceSet/delete)
  - : Entfernt eine manuell hinzugefügte Schriftart aus der Schriftartenmenge. [Mit CSS verknüpfte](https://drafts.csswg.org/css-font-loading-3/#css-connected) Schriftarten bleiben davon unberührt.
- [`FontFaceSet.entries()`](/de/docs/Web/API/FontFaceSet/entries)
  - : Gibt einen neuen Iterator zurück, der die Werte der Elemente im `FontFaceSet` in der Reihenfolge ihres Einfügens liefert.
- [`FontFaceSet.forEach()`](/de/docs/Web/API/FontFaceSet/forEach)
  - : Führt eine übergebene Funktion für jeden Wert im `FontFaceSet`-Objekt aus.
- [`FontFaceSet.has()`](/de/docs/Web/API/FontFaceSet/has)
  - : Gibt einen {{jsxref("Boolean")}}-Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- [`FontFaceSet.keys()`](/de/docs/Web/API/FontFaceSet/keys)
  - : Ein Alias für [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values).
- [`FontFaceSet.load()`](/de/docs/Web/API/FontFaceSet/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Liste von Schriftarten für die angeforderte Schriftart erfüllt wird.
- [`FontFaceSet.values()`](/de/docs/Web/API/FontFaceSet/values)
  - : Gibt ein neues Iteratorobjekt zurück, das die Werte der Elemente im `FontFaceSet`-Objekt in der Reihenfolge ihres Einfügens liefert.

## Ereignisse

- [`loading`](/de/docs/Web/API/FontFaceSet/loading_event)
  - : Wird ausgelöst, wenn das Laden einer Schriftartenmenge beginnt.
- [`loadingdone`](/de/docs/Web/API/FontFaceSet/loadingdone_event)
  - : Wird ausgelöst, wenn das Laden einer Schriftartenmenge abgeschlossen ist.
- [`loadingerror`](/de/docs/Web/API/FontFaceSet/loadingerror_event)
  - : Wird ausgelöst, wenn beim Laden einer Schriftartenmenge ein Fehler auftritt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
