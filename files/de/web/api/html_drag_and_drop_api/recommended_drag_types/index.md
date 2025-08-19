---
title: Empfohlene Drag-Typen
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die HTML Drag and Drop API unterstützt das Ziehen verschiedener Datentypen, einschließlich Klartext, URLs, HTML-Code, Dateien usw. Das Dokument beschreibt bewährte Methoden für häufige ziehbare Datentypen.

## Text ziehen

Verwenden Sie zum Ziehen von Text den Typ `text/plain`. Der zweite Datenparameter sollte der gezogene String sein. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "This is text to drag");
```

Das Ziehen von Text in Textfeldern und Auswahlen auf Webseiten wird automatisch vom Browser durchgeführt, sodass Sie es nicht selbst handhaben müssen.

Es wird empfohlen, immer Daten des Typs `text/plain` als Fallback für Anwendungen oder Ziehelemente hinzuzufügen, die andere Typen nicht unterstützen, es sei denn, es gibt keine logische Textalternative. Fügen Sie diesen `text/plain`-Typ immer zuletzt hinzu, da er der am wenigsten spezifische ist und nicht bevorzugt werden sollte.

Hinweis: In älterem Code können Sie `text/unicode` oder die `Text`-Typen finden. Diese sind äquivalent zu `text/plain` und speichern und rufen Klartextdaten ab.

## Links ziehen

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. Für _beide_ Typen sollte die URL des Links für ihre Daten verwendet werden. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Wie üblich, setze den `text/plain` Typ zuletzt als Fallback für den `text/uri-list` Typ.

Hinweis: Der URL-Typ ist `uri-list` mit einem _I_, nicht einem _L_.

Um mehrere Links zu ziehen, trennen Sie jeden Link innerhalb der `text/uri-list` Daten mit einem CRLF-Zeilenumbruch. Zeilen, die mit einem Nummernzeichen (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den Titel, der mit einer URL assoziiert ist, oder andere Daten anzuzeigen.

> [!WARNING]
> Der `text/plain` Fallback für mehrere Links sollte alle URLs enthalten, jedoch keine Kommentare.

Zum Beispiel enthält dieser `text/uri-list` Beispieldaten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Wenn Sie einen fallen gelassenen Link abrufen, stellen Sie sicher, dass Sie berücksichtigen, wenn mehrere Links gezogen werden, einschließlich aller Kommentare. Aus Bequemlichkeit kann der spezielle Typ `URL` verwendet werden, um auf den ersten gültigen Link innerhalb der Daten für den `text/uri-list` Typ zu verweisen.

> [!WARNING]
> Fügen Sie keine Daten mit dem `URL` Typ hinzu — der Versuch, dies zu tun, wird den Wert des `text/uri-list` Typs setzen.

```js
const url = event.dataTransfer.getData("URL");
```

Sie können auch Daten mit dem Mozilla-spezifischen Typ `text/x-moz-url` sehen. Wenn es erscheint, sollte es vor dem `text/uri-list` Typ erscheinen. Es enthält die URLs der Links, gefolgt von ihren Titeln, getrennt durch einen Zeilenumbruch. Zum Beispiel:

```plain
https://www.mozilla.org
Mozilla
http://www.example.com
Example
```

## HTML- und XML-Ziehen

HTML-Inhalte können den Typ `text/html` verwenden. Die Daten für diesen Typ sollten serialisierter HTML-Quellcode sein. Zum Beispiel wäre es geeignet, seine Daten auf den Wert der [`innerHTML`](/de/docs/Web/API/Element/innerHTML) Eigenschaft eines Elements zu setzen.

XML-Inhalte können den Typ `text/xml` verwenden, stellen Sie jedoch sicher, dass die Daten wohlgeformtes XML sind.

Sie können auch eine Klartextdarstellung der HTML- oder XML-Daten mit dem Typ `text/plain` einfügen. Die Daten sollten nur der Text ohne irgendeine der Quell-Tags oder Attribute sein. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/html", "Hello there, <strong>stranger</strong>");
dt.setData("text/plain", "Hello there, stranger");
```

### Aktualisierungen von DataTransfer.types

Die neueste Spezifikation besagt, dass [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) ein eingefrorenes Array von Strings statt einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurückgeben sollte (dies wird in Firefox 52 und höher unterstützt).

Daher funktioniert die [contains](/de/docs/Web/API/Node/contains) Methode nicht mehr; die [includes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) Methode sollte stattdessen verwendet werden, um zu überprüfen, ob ein bestimmter Datentyp bereitgestellt wird, indem Sie Code wie den folgenden verwenden:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

Sie könnten eine Funktion zur Merkmalserkennung verwenden, um festzustellen, welche Methode bei `types` unterstützt wird, und dann entsprechenden Code ausführen.

## Bilder ziehen

Das direkte Ziehen von Bildern ist nicht üblich. Tatsächlich unterstützt Mozilla das direkte Ziehen von Bildern auf Mac oder Linux nicht. Stattdessen werden Bilder normalerweise nur durch ihre URLs gezogen. Verwenden Sie hierzu den `text/uri-list` Typ wie bei anderen URLs. Die Daten sollten die URL des Bildes oder eine [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) sein, falls das Bild nicht auf einer Website oder Festplatte gespeichert ist.

Wie bei Links sollte auch für den `text/plain` Typ die URL enthalten sein. Eine `data:` URL ist jedoch in einem Textkontext normalerweise nicht nützlich, daher möchten Sie möglicherweise die `text/plain` Daten in dieser Situation ausschließen.

In Chrome oder anderem privilegierten Code können Sie auch die Typen `image/jpeg`, `image/png` oder `image/gif` verwenden, abhängig vom Bildtyp. Die Daten sollten ein Objekt sein, das die `nsIInputStream` Schnittstelle implementiert. Wenn dieser Stream gelesen wird, sollte er die Datenbits für das Bild bereitstellen, als ob das Bild eine Datei dieses Typs wäre.

Sie sollten auch den Typ `application/x-moz-file` einfügen, wenn sich das Bild auf der Festplatte befindet. Dies ist tatsächlich eine gängige Methode, bei der Bilddateien gezogen werden.

Es ist wichtig, die Daten in der richtigen Reihenfolge zu setzen, von spezifischsten zu am wenigsten spezifischen. Der Standard-Bildtyp, wie `image/jpeg`, sollte zuerst kommen, gefolgt vom `application/x-moz-file` Typ. Als nächstes sollten Sie die `text/uri-list` Daten setzen und schließlich die `text/plain` Daten. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", imageURL);
dt.setData("text/plain", imageURL);
```

## Knoten ziehen

Knoten und Elemente in einem Dokument können mit dem Typ `application/x-moz-node` gezogen werden. Die Daten für diesen Typ sollten ein DOM-Knoten sein. Dies ermöglicht dem Empfangsziel den eigentlichen Knoten zu erhalten, von dem das Ziehen gestartet wurde. Beachten Sie, dass Aufrufer von einer anderen Domäne auf den Knoten nicht zugreifen können, selbst wenn er fallen gelassen wurde.

Sie sollten immer eine `text/plain` Alternative für den Knoten einschließen.

## Benutzerdefinierte Daten ziehen

Sie können auch andere Typen verwenden, die Sie für benutzerdefinierte Zwecke erfinden. Bemühen Sie sich immer, eine `text/plain` Alternative einzufügen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Site oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten nicht anderswo fallen gelassen werden können.

## Dateien in einen Ordner des Betriebssystems ziehen

Möglicherweise möchten Sie eine Datei zu einer bestehenden Drag-Event-Sitzung hinzufügen und möglicherweise die Datei auf die Festplatte schreiben, wenn die Drop-Operation über einem Ordner im Betriebssystem erfolgt, wenn Ihr Code eine Benachrichtigung über den Speicherpfad des Zielordners erhält. Dies funktioniert nur in Erweiterungen (oder anderem privilegierten Code) und der Typ `application/moz-file-promise` sollte verwendet werden. Das folgende Beispiel bietet einen Überblick über diesen erweiterten Fall:

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
  getFlavorData(transferable, flavor, data, dataLen) {
    if (flavor === "application/x-moz-file-promise") {
      const urlPrimitive = {};
      const dataSize = {};

      transferable.getTransferData(
        "application/x-moz-file-promise-url",
        urlPrimitive,
        dataSize,
      );
      const url = urlPrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;
      console.log(`URL file original is = ${url}`);

      const namePrimitive = {};
      transferable.getTransferData(
        "application/x-moz-file-promise-dest-filename",
        namePrimitive,
        dataSize,
      );
      const name = namePrimitive.value.QueryInterface(
        Components.interfaces.nsISupportsString,
      ).data;

      console.log(`target filename is = ${name}`);

      const dirPrimitive = {};
      transferable.getTransferData(
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
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
