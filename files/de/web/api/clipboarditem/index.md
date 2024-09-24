---
title: ClipboardItem
slug: Web/API/ClipboardItem
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Clipboard API")}}{{SecureContext_Header}}

Das **`ClipboardItem`**-Interface der [Zwischenablage-API (Clipboard API)](/de/docs/Web/API/Clipboard_API) repräsentiert ein einzelnes Datenformat, das beim Lesen oder Schreiben von Zwischenablagedaten mit {{domxref("clipboard.read()")}} bzw. {{domxref("clipboard.write()")}} verwendet wird.

Der Vorteil des **`ClipboardItem`**-Interfaces zur Darstellung von Daten besteht darin, dass es Entwicklern ermöglicht, mit dem unterschiedlichen Umfang von Dateitypen und Daten umzugehen.

> [!NOTE]
> Um mit Text zu arbeiten, siehe die Methoden {{domxref("Clipboard.readText()")}} und {{domxref("Clipboard.writeText()")}} des {{domxref("Clipboard")}}-Interfaces.

## Konstruktor

- {{domxref("ClipboardItem.ClipboardItem", "ClipboardItem()")}}
  - : Erstellt ein neues **`ClipboardItem`**-Objekt, mit dem {{Glossary("MIME-Typ")}} als Schlüssel und {{domxref("Blob")}} als Wert.

## Instanz-Eigenschaften

_Dieses Interface stellt die folgenden Eigenschaften bereit._

- {{domxref("ClipboardItem.types", "types")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Array")}} von MIME-Typen zurück, die im **`ClipboardItem`** verfügbar sind.
- {{domxref("ClipboardItem.presentationStyle", "presentationStyle")}} {{ReadOnlyInline}}
  - : Gibt einen der folgenden Werte zurück: `"unspecified"`, `"inline"` oder `"attachment"`.

## Statische Methoden

_Dieses Interface definiert die folgenden Methoden._

- {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}}
  - : Prüft, ob ein gegebener {{Glossary("MIME-Typ")}} von der Zwischenablage unterstützt wird. Dies ermöglicht es einer Website zu erkennen, ob ein MIME-Typ von der Zwischenablage unterstützt wird, bevor versucht wird, Daten zu schreiben.

## Instanz-Methoden

_Dieses Interface definiert die folgenden Methoden._

- {{domxref("ClipboardItem.getType", "getType()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("Blob")}} des angeforderten {{Glossary("MIME-Typ")}} aufgelöst wird, oder einen Fehler, wenn der MIME-Typ nicht gefunden wird.

## Beispiele

### In die Zwischenablage schreiben

Hier verwenden wir {{domxref("ClipboardItem.supports_static", "supports()")}}, um zu prüfen, ob der MIME-Datentyp `image/svg+xml` unterstützt wird.
Falls ja, holen wir das Bild mit der ["Fetch API"](/de/docs/Web/API/Fetch_API) und lesen es dann in ein {{domxref("Blob")}} ein, das wir verwenden können, um ein `ClipboardItem` zu erstellen, das in die Zwischenablage geschrieben wird.

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/svg+xml")) {
      const imgURL = "/myimage.svg";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("SVG images are not supported by the clipboard.");
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

### Aus der Zwischenablage lesen

Hier geben wir alle Elemente auf der Zwischenablage mit der {{domxref("clipboard.read()")}} Methode zurück.
Dann nutzen wir die {{domxref("ClipboardItem.types")}} Eigenschaft, um das Argument von {{domxref("ClipboardItem.getType", "getType()")}} zu setzen und das entsprechende Blob-Objekt zurückzugeben.

```js
async function getClipboardContents() {
  try {
    const clipboardItems = await navigator.clipboard.read();

    for (const clipboardItem of clipboardItems) {
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        // we can now use blob here
      }
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zwischenablage-API (Clipboard API)](/de/docs/Web/API/Clipboard_API)
- [Artikel zur Bildunterstützung für die asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
