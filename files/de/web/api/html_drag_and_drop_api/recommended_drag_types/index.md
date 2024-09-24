---
title: Empfohlene Drag-Typen
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die HTML Drag and Drop API unterstützt das Ziehen verschiedener Datentypen, einschließlich Plaintext, URLs, HTML-Code, Dateien usw. Das Dokument beschreibt bewährte Methoden für häufig ziehbare Datentypen.

## Ziehen von Text

Für das Ziehen von Text verwenden Sie den Typ `text/plain`. Der zweite Datenparameter sollte der gezogene String sein. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "This is text to drag");
```

Das Ziehen von Text in Textfeldern und Auswahlen auf Webseiten wird automatisch vom Browser durchgeführt, sodass Sie dies nicht selbst handhaben müssen.

Es wird empfohlen, immer Daten des Typs `text/plain` als Fallback für Anwendungen oder Zielbereiche hinzuzufügen, die andere Typen nicht unterstützen, es sei denn, es gibt keine logische textliche Alternative. Fügen Sie diesen `text/plain`-Typ immer zuletzt hinzu, da er der am wenigsten spezifische ist und nicht bevorzugt werden sollte.

Hinweis: In älterem Code können Sie die Typen `text/unicode` oder `Text` finden. Diese sind gleichwertig zu `text/plain` und speichern und rufen Plaintext-Daten ab.

## Ziehen von Links

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links für ihre Daten verwenden. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Wie üblich, setzen Sie den Typ `text/plain` zuletzt als Fallback für den Typ `text/uri-list`.

Hinweis: Der URL-Typ ist `uri-list` mit einem _I_, nicht einem _L_.

Um mehrere Links zu ziehen, trennen Sie jeden Link innerhalb der `text/uri-list`-Daten mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Nummernzeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den mit einer URL verbundenen Titel oder andere Daten anzugeben.

> [!WARNING]
> Der `text/plain`-Fallback für mehrere Links sollte alle URLs, jedoch keine Kommentare enthalten.

Zum Beispiel enthält diese Beispiel-`text/uri-list`-Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
# Ein zweiter Link
http://www.example.com
```

Beim Abrufen eines gezogenen Links stellen Sie sicher, dass Sie den Fall behandeln, wenn mehrere Links gezogen werden, einschließlich aller Kommentare. Zur Bequemlichkeit kann der spezielle Typ `URL` verwendet werden, um auf den ersten gültigen Link innerhalb der Daten für den Typ `text/uri-list` zu verweisen.

> [!WARNING]
> Fügen Sie keine Daten mit dem Typ `URL` hinzu – der Versuch, dies zu tun, setzt stattdessen den Wert des Typs `text/uri-list`.

```js
const url = event.dataTransfer.getData("URL");
```

Sie können auch Daten mit dem Mozilla-spezifischen Typ `text/x-moz-url` sehen. Wenn er erscheint, sollte er vor dem Typ `text/uri-list` erscheinen. Er enthält die URLs von Links gefolgt von ihren Titeln, getrennt durch einen Zeilenumbruch. Zum Beispiel:

```plain
https://www.mozilla.org
Mozilla
http://www.example.com
Beispiel
```

## Ziehen von HTML und XML

HTML-Inhalte können den Typ `text/html` verwenden. Die Daten für diesen Typ sollten serieller HTML-Quellcode sein. Zum Beispiel wäre es geeignet, seine Daten auf den Wert der Eigenschaft {{domxref("Element.innerHTML","innerHTML")}} eines Elements zu setzen.

XML-Inhalte können den Typ `text/xml` verwenden, stellen Sie jedoch sicher, dass die Daten gut geformtes XML sind.

Sie können auch eine Plaintext-Darstellung der HTML- oder XML-Daten mit dem Typ `text/plain` hinzufügen. Die Daten sollten nur der Text ohne jegliche Quell-Tags oder Attribute sein. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/html", "Hello there, <strong>stranger</strong>");
dt.setData("text/plain", "Hello there, stranger");
```

### Aktualisierungen zu DataTransfer.types

Die jüngste Spezifikation besagt, dass {{domxref("DataTransfer.types")}} ein eingefrorenes Array von Strings statt einer {{domxref("DOMStringList")}} zurückgeben sollte (dies wird in Firefox 52 und höher unterstützt).

Infolgedessen funktioniert die [contains](/de/docs/Web/API/Node/contains)-Methode nicht mehr; stattdessen sollte die [includes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)-Methode verwendet werden, um zu überprüfen, ob ein bestimmter Datentyp bereitgestellt wird, indem Sie einen Code wie den folgenden verwenden:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Mach etwas
}
```

Sie könnten eine Feature-Erkennung verwenden, um zu bestimmen, welche Methode auf `types` unterstützt wird, und dann den Code entsprechend ausführen.

## Ziehen von Bildern

Direktes Ziehen von Bildern ist nicht üblich. Tatsächlich unterstützt Mozilla das direkte Bildziehen unter Mac oder Linux nicht. Stattdessen werden Bilder normalerweise nur über ihre URLs gezogen. Verwenden Sie dazu den Typ `text/uri-list` wie bei anderen URLs. Die Daten sollten die URL des Bildes sein oder eine [`data:` URL](/de/docs/Web/URI/Schemes/data), wenn das Bild nicht auf einer Website oder einem Laufwerk gespeichert ist.

Wie bei Links sollten die Daten für den Typ `text/plain` auch die URL enthalten. Eine `data:` URL ist jedoch in einem Textkontext normalerweise nicht nützlich, sodass Sie möglicherweise die `text/plain`-Daten in dieser Situation ausschließen möchten.

In Chrome oder anderem privilegierten Code können Sie auch die Typen `image/jpeg`, `image/png` oder `image/gif` verwenden, abhängig vom Bildtyp. Die Daten sollten ein Objekt sein, das das `nsIInputStream`-Interface implementiert. Wenn dieser Stream gelesen wird, sollte er die Datenbits für das Bild bereitstellen, als ob das Bild eine Datei dieses Typs wäre.

Sie sollten auch den Typ `application/x-moz-file` einschließen, wenn das Bild auf einem Laufwerk gespeichert ist. Tatsächlich ist dies eine gängige Methode, wie Bilddateien gezogen werden.

Es ist wichtig, die Daten in der richtigen Reihenfolge zu setzen, von spezifischsten bis am wenigsten spezifischen. Der Standardbildtyp, wie `image/jpeg`, sollte zuerst kommen, gefolgt vom Typ `application/x-moz-file`. Als nächstes sollten Sie die `text/uri-list`-Daten setzen und schließlich die `text/plain`-Daten. Beispielsweise:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", imageurl);
dt.setData("text/plain", imageurl);
```

## Ziehen von Knoten

Knoten und Elemente in einem Dokument können mit dem Typ `application/x-moz-node` gezogen werden. Die Daten für diesen Typ sollten ein DOM-Knoten sein. Dies ermöglicht es dem Zielbereich, den tatsächlichen Knoten zu empfangen, von dem das Ziehen gestartet wurde. Beachten Sie, dass Anrufer von einer anderen Domain aus nicht auf den Knoten zugreifen können, selbst wenn er fallen gelassen wurde.

Sie sollten immer eine `text/plain`-Alternative für den Knoten einfügen.

## Ziehen von benutzerdefinierten Daten

Sie können auch andere Typen verwenden, die Sie für benutzerdefinierte Zwecke erfinden. Bemühen Sie sich darum, immer eine `text/plain`-Alternative einzufügen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Website oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten anderswo nicht fallen gelassen werden können.

## Ziehen von Dateien in einen Ordner des Betriebssystems

Möglicherweise möchten Sie einer bestehenden Ziehveranstaltung eine Datei hinzufügen, und Sie möchten die Datei möglicherweise auch auf die Festplatte schreiben, wenn der Drop-Vorgang über einem Ordner im Betriebssystem stattfindet, wenn Ihr Code eine Benachrichtigung über den Zielordner erhält. Dies funktioniert nur in Erweiterungen (oder anderem privilegierten Code) und der Typ `application/moz-file-promise` sollte verwendet werden. Das folgende Beispiel bietet einen Überblick über diesen fortgeschrittenen Fall:

```js
// currentEvent ist ein bestehendes Ziehvorgangsereignis

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

      // jetzt können Sie die Datei selbst schreiben oder kopieren…
    }
  },
};
```

## Siehe auch

- [HTML Drag and Drop API (Übersicht)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
