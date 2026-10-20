---
title: "ClipboardItem: Konstruktor ClipboardItem()"
short-title: ClipboardItem()
slug: Web/API/ClipboardItem/ClipboardItem
l10n:
  sourceCommit: 7b8a3c0a4ab5b4b0c605641e8b64c8da42d8dd51
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Der Konstruktor **`ClipboardItem()`** erstellt ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt. Es repräsentiert Daten, die mit den Methoden [`clipboard.write()`](/de/docs/Web/API/Clipboard/write) beziehungsweise [`clipboard.read()`](/de/docs/Web/API/Clipboard/read) der [Clipboard API](/de/docs/Web/API/Clipboard_API) gespeichert oder abgerufen werden.

> [!NOTE]
> Mit den Methoden `read()` und `write()` können Sie Textzeichenfolgen und beliebige Datenelemente verarbeiten, die durch [`Blob`](/de/docs/Web/API/Blob)-Instanzen repräsentiert werden. Wenn Sie ausschließlich mit Text arbeiten, sind die Methoden [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText) und [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText) jedoch praktischer.

> [!NOTE]
> Die Unterstützung von Bildformaten variiert je nach Browser. Weitere Informationen finden Sie in der [Tabelle zur Browser-Kompatibilität](/de/docs/Web/API/Clipboard#browser_compatibility) für das `Clipboard`-Interface.

## Syntax

```js-nolint
new ClipboardItem(data)
new ClipboardItem(data, options)
```

### Parameter

- `data`
  - : Ein {{jsxref("Object")}} mit einer oder mehreren Eigenschaften, die jeweils ein anderes Format desselben Zwischenablageeintrags repräsentieren.
    Der Schlüssel jeder Eigenschaft ist ein {{Glossary("MIME_type", "MIME-Typ")}}, beispielsweise `"text/plain"` oder `"text/html"`. Ihr Wert enthält die Daten in diesem Format.

    Jeder Wert kann wie folgt angegeben werden:
    - als [`Blob`](/de/docs/Web/API/Blob)
    - als Zeichenfolge
    - als {{jsxref("Promise")}}, das zu einem `Blob` oder einer Zeichenfolge aufgelöst wird.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `presentationStyle` {{optional_inline}}
      - : Eine der drei Zeichenfolgen `unspecified`, `inline` oder `attachment`.
        Der Standardwert ist `unspecified`.

        `inline` signalisiert Anwendungen, in die der Inhalt eingefügt wird, dass das `ClipboardItem` an der Einfügeposition direkt in den Inhalt eingefügt werden soll. `attachment` signalisiert, dass das `ClipboardItem` als Anhang hinzugefügt werden soll. `unspecified` übermittelt diesen Anwendungen keine Informationen zur Darstellung.

## Beispiele

Das folgende Beispiel ruft mit [`fetch()`](/de/docs/Web/API/Window/fetch) ein PNG-Bild ab und erstellt daraus mithilfe der Methode [`Response.blob()`](/de/docs/Web/API/Response/blob) ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem).
Anschließend wird dieses Element mit der Methode [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) in die Zwischenablage geschrieben.

Ein Beispiel für das Schreiben und anschließende Lesen mehrerer MIME-Typ-Repräsentationen in einem `ClipboardItem` finden Sie unter [Mehrere Formate aus der Zwischenablage lesen](/de/docs/Web/API/Clipboard/read#reading_multiple_formats_from_the_clipboard).

> [!NOTE]
> [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) erwartet ein Array von `ClipboardItem`-Objekten. Wenn das zugrunde liegende Betriebssystem das Schreiben mehrerer Elemente jedoch nicht unterstützt, wird nur das erste Element geschrieben.
> Einige Browserversionen lösen eine Ausnahme aus, wenn das Array mehr als ein Element enthält (siehe [Browser-Kompatibilität](/de/docs/Web/API/Clipboard/write#browser_compatibility) für `Clipboard.write()`).

```js
async function writeClipImg() {
  try {
    if (ClipboardItem.supports("image/png")) {
      const imgURL = "/my-image.png";
      const data = await fetch(imgURL);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      console.log("Fetched image copied.");
    } else {
      console.log("image png is not supported");
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

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Artikel zur Bildunterstützung für die Async Clipboard API](https://web.dev/articles/async-clipboard)
