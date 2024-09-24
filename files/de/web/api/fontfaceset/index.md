---
title: FontFaceSet
slug: Web/API/FontFaceSet
l10n:
  sourceCommit: e89ed8e9ab638ff45f7915f9d22b8b44118bef85
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFaceSet`**-Schnittstelle der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) verwaltet das Laden von Schriftarten und das Abfragen ihres Downloadstatus.

Eine `FontFaceSet`-Instanz ist ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das eine geordnete Sammlung von {{domxref("FontFace")}}-Objekten halten kann.

Diese Eigenschaft ist als {{domxref("Document.fonts")}} oder `self.fonts` in [Web-Workern](/de/docs/Web/API/Web_Workers_API) verfügbar.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("FontFaceSet.status")}} {{ReadOnlyInline}}
  - : Gibt den Ladezustand der Schriftart an. Es wird entweder `'loading'` oder `'loaded'` sein.
- {{domxref("FontFaceSet.ready")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald das Laden der Schriftarten und die Layout-Operationen abgeschlossen sind.
- {{domxref("FontFaceSet.size")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Werte im `FontFaceSet` zurück.

### Ereignisse

- {{domxref("FontFaceSet.loading_event", "loading")}}
  - : Wird ausgelöst, wenn ein Schriftartensatz mit dem Laden begonnen hat.
- {{domxref("FontFaceSet.loadingdone_event", "loadingdone")}}
  - : Wird ausgelöst, wenn ein Schriftartensatz das Laden abgeschlossen hat.
- {{domxref("FontFaceSet.loadingerror_event", "loadingerror")}}
  - : Wird ausgelöst, wenn ein Fehler beim Laden eines Schriftartensatzes aufgetreten ist.

## Instanz-Methoden

- {{domxref("FontFaceSet.add","FontFaceSet.add()")}}
  - : Fügt dem Schriftartensatz eine Schriftart hinzu.
- {{domxref("FontFaceSet.check","FontFaceSet.check()")}}
  - : Ein boolescher Wert, der anzeigt, ob eine Schriftart geladen ist, jedoch keinen Ladevorgang initiiert, wenn sie es nicht ist.
- {{domxref("FontFaceSet.clear", "FontFaceSet.clear()")}}
  - : Entfernt alle manuell hinzugefügten Schriftarten aus dem Schriftartensatz. [CSS-verknüpfte](https://www.w3.org/TR/css-font-loading-3/#css-connected) Schriftarten sind nicht betroffen.
- {{domxref("FontFaceSet.delete","FontFaceSet.delete()")}}
  - : Entfernt eine manuell hinzugefügte Schriftart aus dem Schriftartensatz. [CSS-verknüpfte](https://www.w3.org/TR/css-font-loading-3/#css-connected) Schriftarten sind nicht betroffen.
- {{domxref("FontFaceSet.entries","FontFaceSet.entries()")}}
  - : Gibt einen neuen Iterator mit den Werten für jedes Element im `FontFaceSet` in Einfügereihenfolge zurück.
- {{domxref("FontFaceSet.forEach","FontFaceSet.forEach()")}}
  - : Führt eine bereitgestellte Funktion für jeden Wert im `FontFaceSet`-Objekt aus.
- {{domxref("FontFaceSet.has","FontFaceSet.has()")}}
  - : Gibt einen {{jsxref("Boolean")}} zurück, der bestätigt, ob ein Element mit dem angegebenen Wert vorhanden ist.
- {{domxref("FontFaceSet.keys","FontFaceSet.keys()")}}
  - : Ein Alias für {{domxref("FontFaceSet.values()")}}.
- {{domxref("FontFaceSet.load","FontFaceSet.load()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das in eine Liste von Schriftarten für eine angeforderte Schriftart aufgelöst wird.
- {{domxref("FontFaceSet.values","FontFaceSet.values()")}}
  - : Gibt ein neues Iteratorobjekt zurück, das die Werte für jedes Element im `FontFaceSet`-Objekt in Einfügereihenfolge liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
