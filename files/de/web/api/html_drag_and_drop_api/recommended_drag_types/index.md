---
title: Empfohlene Drag-Typen
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die HTML Drag and Drop API unterstützt das Ziehen verschiedener Datentypen, darunter reiner Text, URLs, HTML-Code, Dateien usw. Das Dokument beschreibt bewährte Praktiken für gängige ziehbare Datentypen.

## Ziehen von Text

Zum Ziehen von Text verwenden Sie den Typ `text/plain`. Der zweite Datenparameter sollte die gezogene Zeichenkette sein. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "This is text to drag");
```

Das Ziehen von Text in Textfeldern und Auswahlen auf Webseiten wird automatisch vom Browser durchgeführt, sodass Sie es nicht selbst handhaben müssen.

Es wird empfohlen, Daten des Typs `text/plain` immer als Fallback für Anwendungen oder Ziehziele hinzuzufügen, die andere Typen nicht unterstützen, es sei denn, es gibt keine logische Textalternative. Fügen Sie diesen `text/plain`-Typ immer zuletzt hinzu, da er der am wenigsten spezifische ist und nicht bevorzugt werden sollte.

Hinweis: In älterem Code finden Sie möglicherweise die Typen `text/unicode` oder `Text`. Diese sind gleichbedeutend mit `text/plain` und speichern und rufen einfache Textdaten ab.

## Ziehen von Links

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links für ihre Daten verwenden. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Wie üblich setzen Sie den Typ `text/plain` zuletzt, als Fallback für den Typ `text/uri-list`.

Hinweis: Der URL-Typ ist `uri-list` mit einem _I_, nicht einem _L_.

Um mehrere Links zu ziehen, trennen Sie in den `text/uri-list`-Daten jeden Link mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Nummernzeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den mit einer URL verbundenen Titel oder andere Daten anzugeben.

> [!WARNING]
> Das `text/plain`-Fallback für mehrere Links sollte alle URLs enthalten, jedoch keine Kommentare.

Zum Beispiel enthalten diese `text/uri-list`-Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Wenn Sie einen gezogenen Link abrufen, stellen Sie sicher, dass Sie den Fall berücksichtigen, wenn mehrere Links gezogen werden, einschließlich etwaiger Kommentare. Der spezielle Typ `URL` kann bequem verwendet werden, um auf den ersten gültigen Link innerhalb der Daten für den Typ `text/uri-list` zu verweisen.

> [!WARNING]
> Fügen Sie keine Daten mit dem Typ `URL` hinzu – der Versuch, dies zu tun, wird den Wert des Typs `text/uri-list` festlegen.

```js
const url = event.dataTransfer.getData("URL");
```

Sie können auch Daten mit dem Mozilla-spezifischen Typ `text/x-moz-url` sehen. Wenn es angezeigt wird, sollte es vor dem Typ `text/uri-list` erscheinen. Es enthält die URLs der Links, gefolgt von ihren Titeln, getrennt durch einen Zeilenumbruch. Zum Beispiel:

```plain
https://www.mozilla.org
Mozilla
http://www.example.com
Example
```

## Ziehen von HTML und XML

HTML-Inhalte können den Typ `text/html` verwenden. Die Daten für diesen Typ sollten serialisierter HTML-Quellcode sein. Zum Beispiel wäre es geeignet, die Daten auf den Wert der [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft eines Elements zu setzen.

XML-Inhalte können den Typ `text/xml` verwenden, stellen Sie jedoch sicher, dass die Daten wohlgeformtes XML sind.

Sie können auch eine einfache Textdarstellung der HTML- oder XML-Daten unter Verwendung des Typs `text/plain` einfügen. Die Daten sollten nur der Text ohne irgendwelche Quell-Tags oder Attribute sein. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/html", "Hello there, <strong>stranger</strong>");
dt.setData("text/plain", "Hello there, stranger");
```

### Updates zu DataTransfer.types

Die neueste Spezifikation besagt, dass [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) ein eingefrorenes Array von Zeichenfolgen anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurückgeben sollte (dies wird in Firefox 52 und darüber unterstützt).

Folglich funktioniert die [contains](/de/docs/Web/API/Node/contains)-Methode nicht mehr; die [includes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)-Methode sollte stattdessen verwendet werden, um zu prüfen, ob ein bestimmter Datentyp bereitgestellt wird, indem Code wie der folgende verwendet wird:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

Sie könnten eine Feature-Erkennung verwenden, um zu bestimmen, welche Methode auf `types` unterstützt wird, und dann den Code entsprechend ausführen.

## Ziehen von Bildern

Direktes Ziehen von Bildern ist nicht üblich. Tatsächlich unterstützt Mozilla das direkte Ziehen von Bildern unter Mac oder Linux nicht. Stattdessen werden Bilder normalerweise nur über ihre URLs gezogen. Verwenden Sie dafür den Typ `text/uri-list` wie bei anderen URLs. Die Daten sollten die URL des Bildes sein oder eine [`data:` URL](/de/docs/Web/URI/Schemes/data), wenn das Bild nicht auf einer Website oder auf einer Festplatte gespeichert ist.

Wie bei Links sollten die Daten für den Typ `text/plain` auch die URL enthalten. Eine `data:` URL ist jedoch im Textkontext normalerweise nicht nützlich, sodass Sie in diesem Fall die `text/plain`-Daten weglassen möchten.

In Chrome oder anderem privilegierten Code können Sie auch die Typen `image/jpeg`, `image/png` oder `image/gif` verwenden, abhängig vom Bildtyp. Die Daten sollten ein Objekt sein, das das `nsIInputStream`-Interface implementiert. Wenn dieser Stream gelesen wird, sollte er die Datenbits für das Bild bereitstellen, als ob das Bild eine Datei dieses Typs wäre.

Sie sollten auch den Typ `application/x-moz-file` einfügen, wenn sich das Bild auf der Festplatte befindet. Tatsächlich ist dies eine übliche Methode, wie Bilddateien gezogen werden.

Es ist wichtig, die Daten in der richtigen Reihenfolge zu setzen, von am spezifischsten bis am wenigsten spezifisch. Der Standardbildtyp, wie `image/jpeg`, sollte zuerst kommen, gefolgt vom Typ `application/x-moz-file`. Als nächstes sollten Sie die Daten `text/uri-list` setzen und schließlich die Daten `text/plain`. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", imageurl);
dt.setData("text/plain", imageurl);
```

## Ziehen von Knoten

Knoten und Elemente in einem Dokument können mit dem Typ `application/x-moz-node` gezogen werden. Die Daten für diesen Typ sollten ein DOM-Knoten sein. Dies ermöglicht es dem Ziel der Ablage, den tatsächlichen Knoten zu erhalten, von dem die Ziehung gestartet wurde. Beachten Sie, dass Anrufer von einer anderen Domäne aus nicht auf den Knoten zugreifen können, selbst wenn er abgelegt wurde.

Sie sollten immer eine `text/plain`-Alternative für den Knoten einfügen.

## Ziehen benutzerdefinierter Daten

Sie können auch andere Typen verwenden, die Sie für benutzerdefinierte Zwecke erfinden. Streben Sie an, immer eine `text/plain`-Alternative einzufügen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Seite oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten nicht an anderer Stelle abgelegt werden können.

## Ziehen von Dateien in ein Betriebssystem-Ordner

Sie könnten eine Datei zu einem bestehenden Drag-Event-Session hinzufügen und Sie könnten auch die Datei auf die Festplatte schreiben, wenn die Ablageoperation über einem Ordner im Betriebssystem erfolgt, wenn Ihr Code eine Benachrichtigung über den Speicherort des Zielordners erhält. Dies funktioniert nur in Erweiterungen (oder anderem privilegierten Code) und der Typ `application/moz-file-promise` sollte verwendet werden. Das folgende Beispiel gibt einen Überblick über diesen fortgeschrittenen Fall:

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

- [HTML Drag and Drop API (Überblick)](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
