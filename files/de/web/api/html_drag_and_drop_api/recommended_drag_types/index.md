---
title: Empfohlene Drag-Typen
slug: Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die HTML Drag and Drop API unterstützt das Ziehen verschiedener Datentypen, einschließlich Klartext, URLs, HTML-Code, Dateien usw. Dieses Dokument beschreibt Best Practices für häufig verwendete draggable Datentypen.

## Text ziehen

Zum Ziehen von Text verwenden Sie den Typ `text/plain`. Der zweite Datenparameter sollte die gezogene Zeichenkette sein. Zum Beispiel:

```js
event.dataTransfer.setData("text/plain", "This is text to drag");
```

Das Ziehen von Text in Textfeldern und Auswahlbereichen auf Webseiten wird automatisch vom Browser verarbeitet, sodass Sie dies nicht selbst handhaben müssen.

Es wird empfohlen, immer Daten des Typs `text/plain` als Fallback für Anwendungen oder Ziele hinzuzufügen, die andere Typen nicht unterstützen, es sei denn, es gibt keine logische Textalternative. Fügen Sie diesen Typ `text/plain` immer zuletzt hinzu, da er der unspezifischste ist und nicht bevorzugt werden sollte.

Hinweis: In älterem Code könnten Sie `text/unicode` oder den Typ `Text` finden. Diese sind äquivalent zu `text/plain` und speichern und rufen einfache Textdaten ab.

## Links ziehen

Gezogene Hyperlinks sollten Daten von zwei Typen enthalten: `text/uri-list` und `text/plain`. _Beide_ Typen sollten die URL des Links als ihre Daten verwenden. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Wie üblich setzen Sie den Typ `text/plain` zuletzt als Fallback für den Typ `text/uri-list`.

Hinweis: Der URL-Typ ist `uri-list` mit einem _I_ und nicht mit einem _L_.

Um mehrere Links zu ziehen, trennen Sie jeden Link im `text/uri-list`-Datenfeld mit einem CRLF-Zeilenumbruch. Zeilen, die mit einer Raute (`#`) beginnen, sind Kommentare und sollten nicht als URLs betrachtet werden. Sie können Kommentare verwenden, um den Zweck einer URL, den Titel einer URL oder andere Informationen anzugeben.

> [!WARNING]
> Der Fallback `text/plain` für mehrere Links sollte alle URLs enthalten, jedoch keine Kommentare.

Zum Beispiel enthält diese Beispiel-`text/uri-list`-Daten zwei Links und einen Kommentar:

```plain
https://www.mozilla.org
#A second link
http://www.example.com
```

Wenn Sie einen gezogenen Link abfragen, stellen Sie sicher, dass Sie den Fall berücksichtigen, dass mehrere Links gezogen wurden, einschließlich etwaiger Kommentare. Der spezielle Typ `URL` kann für die erste gültige URL innerhalb der Daten des Typs `text/uri-list` verwendet werden.

> [!WARNING]
> Fügen Sie keine Daten mit dem Typ `URL` hinzu – der Versuch, dies zu tun, setzt stattdessen den Wert des Typs `text/uri-list`.

```js
const url = event.dataTransfer.getData("URL");
```

Sie können auch Daten mit dem Mozilla-spezifischen Typ `text/x-moz-url` sehen. Wenn er vorhanden ist, sollte er vor dem Typ `text/uri-list` erscheinen. Er enthält die URLs von Links, gefolgt von deren Titeln, getrennt durch einen Zeilenumbruch. Zum Beispiel:

```plain
https://www.mozilla.org
Mozilla
http://www.example.com
Example
```

## HTML und XML ziehen

HTML-Inhalte können den Typ `text/html` verwenden. Die Daten für diesen Typ sollten serialisierte HTML-Quelltexte sein. Zum Beispiel könnte es geeignet sein, dessen Daten auf den Wert der [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft eines Elements zu setzen.

XML-Inhalte können den Typ `text/xml` verwenden, stellen Sie jedoch sicher, dass die Daten gut geformtes XML sind.

Sie können auch eine reine Textdarstellung der HTML- oder XML-Daten mithilfe des Typs `text/plain` hinzufügen. Die Daten sollten nur der Text ohne die zugehörigen Tags oder Attribute sein. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/html", "Hello there, <strong>stranger</strong>");
dt.setData("text/plain", "Hello there, stranger");
```

### Aktualisierungen zu DataTransfer.types

Die neueste Spezifikation legt fest, dass [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) ein eingefrorenes Array von Zeichenketten anstelle einer [`DOMStringList`](/de/docs/Web/API/DOMStringList) zurückgeben sollte (dies wird in Firefox 52 und höher unterstützt).

Daher funktioniert die [contains](/de/docs/Web/API/Node/contains)-Methode nicht mehr; stattdessen sollte die [includes](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)-Methode verwendet werden, um zu prüfen, ob ein bestimmter Datentyp bereitgestellt wird, zum Beispiel mit folgendem Code:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

Sie könnten Feature-Erkennung verwenden, um zu bestimmen, welche Methode auf `types` unterstützt wird, und dann den Code entsprechend ausführen.

## Bilder ziehen

Direktes Ziehen von Bildern ist nicht üblich. Tatsächlich wird das direkte Ziehen von Bildern unter Mac oder Linux von Mozilla nicht unterstützt. Stattdessen werden Bilder normalerweise nur über ihre URLs gezogen. Verwenden Sie dazu denselben Typ `text/uri-list` wie bei anderen URLs. Die Daten sollten die URL des Bildes oder eine [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) sein, wenn das Bild nicht auf einer Website oder Festplatte gespeichert ist.

Wie bei Links sollten die Daten für den Typ `text/plain` auch die URL enthalten. Eine `data:`-URL ist jedoch in einem Textkontext normalerweise nicht nützlich, sodass Sie die `text/plain`-Daten in diesem Fall möglicherweise auslassen möchten.

In Chrome oder anderem privilegierten Code können Sie auch die Typen `image/jpeg`, `image/png` oder `image/gif` verwenden, abhängig vom Bildtyp. Die Daten sollten ein Objekt sein, das die Schnittstelle `nsIInputStream` implementiert. Beim Lesen dieses Streams sollte er die Bits für die Bilddaten wie bei einer Datei dieses Typs bereitstellen.

Sie sollten auch den Typ `application/x-moz-file` hinzufügen, wenn sich das Bild auf der Festplatte befindet. Tatsächlich ist dies eine gebräuchliche Methode, um Bilddateien zu ziehen.

Es ist wichtig, die Daten in der richtigen Reihenfolge festzulegen, von spezifischsten zu den allgemeinsten. Der Standard-Bildtyp, wie `image/jpeg`, sollte zuerst kommen, gefolgt vom Typ `application/x-moz-file`. Danach sollten Sie die `text/uri-list`-Daten und schließlich die `text/plain`-Daten festlegen. Zum Beispiel:

```js
const dt = event.dataTransfer;
dt.setData("text/uri-list", imageURL);
dt.setData("text/plain", imageURL);
```

## Nodes ziehen

Nodes und Elemente in einem Dokument können mithilfe des Typs `application/x-moz-node` gezogen werden. Die Daten für diesen Typ sollten ein DOM-Node sein. Dies ermöglicht es dem Ziel des Ziehens, den tatsächlichen Node zu erhalten, von dem das Ziehen ausging. Beachten Sie, dass Aufrufer aus einer anderen Domäne keinen Zugriff auf den Node haben werden, selbst wenn er abgeworfen wurde.

Es sollte immer eine `text/plain`-Alternative für den Node enthalten sein.

## Eigene Daten ziehen

Sie können auch andere Typen verwenden, die Sie für eigene Zwecke erstellen. Versuchen Sie stets, eine `text/plain`-Alternative hinzuzufügen, es sei denn, das gezogene Objekt ist spezifisch für eine bestimmte Website oder Anwendung. In diesem Fall stellt der benutzerdefinierte Typ sicher, dass die Daten nicht anderswo abgelegt werden können.

## Dateien in einen Ordner des Betriebssystems ziehen

Es kann erforderlich sein, eine Datei zu einer vorhandenen Drag-Event-Sitzung hinzuzufügen, und Sie möchten möglicherweise die Datei auf der Festplatte schreiben, wenn die Drop-Operation über einem Ordner im Betriebssystem erfolgt, während Ihr Code eine Benachrichtigung über den Speicherort des Zielordners empfängt. Dies funktioniert nur in Erweiterungen (oder anderem privilegierten Code), und der Typ `application/moz-file-promise` sollte verwendet werden. Das folgende Beispiel bietet einen Überblick über diesen erweiterten Fall:

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
- [Zieh-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
