---
title: Empfohlene Drag-Typen
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die HTML Drag and Drop API unterstützt das Ziehen verschiedener Datentypen, einschließlich Klartext, URLs, HTML-Code, Dateien usw. Das Dokument beschreibt bewährte Methoden für gängige ziehbare Datentypen.

## Ziehen von Text

Zum Ziehen von Text verwenden Sie den Typ `text/plain`. Der zweite Datenparameter sollte die gezogene Zeichenkette sein. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "This is text to drag");
```

Das Ziehen von Text in Textfeldern und Auswahlen auf Webseiten wird automatisch vom Browser erledigt, sodass Sie es nicht selbst behandeln müssen.

Es wird empfohlen, immer Daten des Typs `text/plain` als Fallback für Anwendungen oder Ziele, die andere Typen nicht unterstützen, hinzuzufügen, es sei denn, es gibt keine logische Textalternative. Fügen Sie diesen Typ `text/plain` immer zuletzt hinzu, da er der unspezifischste ist und nicht bevorzugt werden sollte.

Hinweis: In älterem Code können Sie den Typ `text/unicode` oder `Text` finden. Diese sind gleichbedeutend mit `text/plain` und speichern und rufen Klartextdaten ab.

## Ziehen von Links

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links für ihre Daten verwenden. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Wie gewohnt setzen Sie den Typ `text/plain` zuletzt als Fallback für den Typ `text/uri-list`.

Hinweis: Der URL-Typ ist `uri-list` mit einem _I_, nicht einem _L_.

Um mehrere Links zu ziehen, trennen Sie jeden Link in den `text/uri-list` Daten mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Nummernzeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den Titel, der mit einer URL verknüpft ist, oder andere Daten anzugeben.

> [!WARNING]
> Der `text/plain` Fallback für mehrere Links sollte alle URLs, aber keine Kommentare, enthalten.

Zum Beispiel enthält diese Beispiel-`text/uri-list` Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Wenn Sie einen abgelegten Link abholen, stellen Sie sicher, dass Sie behandeln, wenn mehrere Links gezogen wurden, einschließlich aller Kommentare. Zur Bequemlichkeit kann der spezielle Typ `URL` verwendet werden, um auf den ersten gültigen Link innerhalb der Daten für den Typ `text/uri-list` zu verweisen.

> [!WARNING]
> Fügen Sie keine Daten mit dem Typ `URL` hinzu – der Versuch, dies zu tun, setzt den Wert des Typs `text/uri-list` stattdessen.

```js
const url = event.dataTransfer.getData("URL");
```

Sie können auch Daten mit dem Mozilla-spezifischen Typ `text/x-moz-url` sehen. Wenn es erscheint, sollte es vor dem Typ `text/uri-list` erscheinen. Es enthält die URLs der Links gefolgt von ihren Titeln, getrennt durch einen Zeilenumbruch. Zum Beispiel:

```plain
https://www.mozilla.org
Mozilla
http://www.example.com
Example
```

## Ziehen von HTML und XML

HTML-Inhalte können den Typ `text/html` verwenden. Die Daten für diesen Typ sollten als HTML-Quellcode serialisiert werden. Zum Beispiel wäre es geeignet, seine Daten auf den Wert der [`innerHTML`](/de/docs/Web/API/Element/innerHTML) Eigenschaft eines Elements zu setzen.

XML-Inhalte können den Typ `text/xml` verwenden, aber stellen Sie sicher, dass die Daten wohlgeformtes XML sind.

Sie können auch eine Klartext-Darstellung der HTML- oder XML-Daten mithilfe des Typs `text/plain` einbeziehen. Die Daten sollten nur der Text ohne die Quell-Tags oder Attribute sein. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/html", "Hello there, <strong>stranger</strong>");
dt.setData("text/plain", "Hello there, stranger");
```

### Aktualisierungen zu DataTransfer.types

Die neueste Spezifikation diktiert, dass [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) ein eingefrorenes Array von Zeichenketten anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurückgeben sollte (dies wird ab Firefox 52 unterstützt).

Daher funktioniert die Methode [contains](/de/docs/Web/API/Node/contains) nicht mehr; die Methode [includes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) sollte stattdessen verwendet werden, um zu überprüfen, ob ein bestimmter Datentyp bereitgestellt wird, mit Code wie dem folgenden:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

Sie könnten Feature-Erkennung verwenden, um festzustellen, welche Methode auf `types` unterstützt wird, und dann den Code entsprechend ausführen.

## Ziehen von Bildern

Das direkte Ziehen von Bildern ist nicht üblich. Tatsächlich unterstützt Mozilla das direkte Ziehen von Bildern auf Mac oder Linux nicht. Stattdessen werden Bilder normalerweise nur über ihre URLs gezogen. Um dies zu tun, verwenden Sie den Typ `text/uri-list` wie bei anderen URLs. Die Daten sollten die URL des Bildes sein oder eine [`data:` URL](/de/docs/Web/URI/Schemes/data), wenn das Bild nicht auf einer Website oder einem Datenträger gespeichert ist.

Wie bei Links sollten die Daten für den Typ `text/plain` auch die URL enthalten. Eine `data:` URL ist jedoch normalerweise in einem Textkontext nicht nützlich, sodass Sie die `text/plain` Daten in dieser Situation möglicherweise ausschließen möchten.

In Chrome oder anderem privilegierten Code können Sie auch die Typen `image/jpeg`, `image/png` oder `image/gif` verwenden, abhängig vom Bildtyp. Die Daten sollten ein Objekt sein, das die `nsIInputStream` Schnittstelle implementiert. Wenn dieser Stream gelesen wird, sollte er die Datenbits für das Bild bereitstellen, als ob das Bild eine Datei dieses Typs wäre.

Sie sollten auch den Typ `application/x-moz-file` einbeziehen, wenn sich das Bild auf der Festplatte befindet. Tatsächlich ist dies eine gängige Methode, wie Bilddateien gezogen werden.

Es ist wichtig, die Daten in der richtigen Reihenfolge zu setzen, von den spezifischsten zu den unspezifischeren. Der Standardbildtyp, wie `image/jpeg`, sollte zuerst kommen, gefolgt vom `application/x-moz-file` Typ. Danach sollten Sie die `text/uri-list` Daten setzen und schließlich die `text/plain` Daten. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", imageURL);
dt.setData("text/plain", imageURL);
```

## Ziehen von Knoten

Knoten und Elemente in einem Dokument können mithilfe des Typs `application/x-moz-node` gezogen werden. Die Daten für diesen Typ sollten ein DOM-Knoten sein. Dies ermöglicht es dem Ziel, den tatsächlichen Knoten zu erhalten, von dem das Ziehen gestartet wurde. Beachten Sie, dass Anrufer von einer anderen Domäne nicht auf den Knoten zugreifen können, selbst wenn er fallen gelassen wurde.

Sie sollten immer eine `text/plain` Alternative für den Knoten einbeziehen.

## Ziehen von benutzerdefinierten Daten

Sie können auch andere Typen verwenden, die Sie für benutzerdefinierte Zwecke erfinden. Streben Sie an, immer eine `text/plain` Alternative einzubeziehen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Seite oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten nicht anderswo abgelegt werden können.

## Dateien in einen Ordner des Betriebssystems ziehen

Möglicherweise möchten Sie eine Datei zu einer vorhandenen Drag-Ereignis-Sitzung hinzufügen und Sie möchten die Datei auch auf die Festplatte schreiben, wenn die Abgabeaktion über einem Ordner im Betriebssystem erfolgt, wenn Ihr Code eine Benachrichtigung über den Speicherort des Zielordners erhält. Dies funktioniert nur in Erweiterungen (oder anderem privilegierten Code), und der Typ `application/moz-file-promise` sollte verwendet werden. Das folgende Beispiel bietet einen Überblick über diesen fortgeschrittenen Fall:

```js
// currentEvent is an existing drag operation event

currentEvent.dataTransfer.setData("text/x-moz-url", URL);
currentEvent.dataTransfer.setData("application/x-moz-file-promise-url", URL);
currentEvent.dataTransfer.setData(
  "application/x-moz-file-promise-dest-filename",
  leafName,
);

function dataProvider() {}

dataProvider.prototype = {
  QueryInterface(iid) {
    if (
      iid.equals(Components.interfaces.nsIFlavorDataProvider) ||
      iid.equals(Components.interfaces.nsISupports)
    )
      return this;
    throw Components.results.NS_NOINTERFACE;
  },
  getFlavorData(aTransferable, aFlavor, aData, aDataLen) {
    if (aFlavor === "application/x-moz-file-promise") {
      const urlPrimitive = {};
      const dataSize = {};

      aTransferable.getTransferData(
        "application/x-moz-file-promise-url",
        urlPrimitive,
        dataSize,
      );
      const url = urlPrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;
      console.log(`URL file original is = ${url}`);

      const namePrimitive = {};
      aTransferable.getTransferData(
        "application/x-moz-file-promise-dest-filename",
        namePrimitive,
        dataSize,
      );
      const name = namePrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;

      console.log(`target filename is = ${name}`);

      const dirPrimitive = {};
      aTransferable.getTransferData(
        "application/x-moz-file-promise-dir",
        dirPrimitive,
        dataSize,
      );
      const dir = dirPrimitive.value.QueryInterface(
        Components.interfaces.nsILocalFile,
      );

      console.log(`target folder is = ${dir.path}`);

      const file = Cc["@mozilla.org/file/local;1"].createInstance(
        Components.interfaces.nsILocalFile,
      );
      file.initWithPath(dir.path);
      file.appendRelativePath(name);

      console.log(`output final path is = ${file.path}`);

      // now you can write or copy the file yourself…
    }
  },
};
```

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Zug-Aktionen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
