---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`image`** werden verwendet, um grafische Absende-Schaltflächen zu erstellen, d. h. Absende-Schaltflächen, die in Form eines Bildes anstatt von Text erscheinen.

{{EmbedInteractiveExample("pages/tabbed/input-image.html", "tabbed-standard")}}

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zu dem anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Elementen gemeinsam genutzt werden, unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut bietet eine alternative Zeichenkette, die als Beschriftung des Buttons verwendet werden soll, wenn das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user agent")}}, der keine Bilder anzeigen kann oder dafür konfiguriert ist, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Falls angegeben, muss es sich um eine nicht leere Zeichenkette handeln, die als Beschriftung für den Button geeignet ist.

Ein Beispiel: Wenn Sie einen grafischen Button haben, der ein Bild mit einem Symbol und/oder dem Text "Jetzt anmelden" zeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt anmelden` setzen.

> [!NOTE]
> Auch wenn das `alt`-Attribut technisch gesehen optional ist, sollten Sie es immer hinzufügen, um die Usability Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut bei {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des das {{HTMLElement("input")}}-Element besitzenden {{HTMLElement("form")}}-Elements.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode angibt, die beim Absenden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String nach {{Glossary("Percent-encoding", "percent-encoding")}} des Textes mithilfe eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die {{domxref("FormData")}}-API zur Verwaltung der Daten und ermöglicht das Senden von Dateien an den Server. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular ein {{HTMLElement("input")}}-Element vom [`type`](/de/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nur für Debugging nützlich, sodass Sie die Daten, die gesendet werden sollen, leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des das Element besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der anzeigt, welche HTTP-Methode zum Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des besitzenden Formulars. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der im `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebenen URL begonnen wird, dem ein Fragezeichen ("?") angehängt wird, gefolgt von den Formulardaten, die nach `formenctype` oder dem [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars kodiert sind. Diese URL wird dann an den Server mittels eines HTTP-{{HTTPMethod("get")}}-Requests gesendet. Diese Methode eignet sich gut für einfache Formulare, die nur {{Glossary("ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Körper des Requests gesendet, der an die im `formaction`- oder [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegebene URL geht, mittels eines HTTP-{{HTTPMethod("post")}}-Requests. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode gibt an, dass der Button den Dialog schließt, mit dem das Eingabefeld verbunden ist, und sendet keine Formulardaten.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein boolesches Attribut, das, falls vorhanden, spezifiziert, dass das Formular vor dem Absenden an den Server nicht validiert werden sollte. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des das Element besitzenden Formulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort spezifiziert, das anzeigt, wo die Antwort nach dem Absenden des Formulars angezeigt werden soll. Der String muss der Name eines **Browsing-Kontextes** sein (das heißt, ein Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des das Element besitzenden {{HTMLElement("form")}}-Elements angegebene Ziel.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den gleichen Browsing-Kontext wie derjenige, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist typischerweise ein neuer Tab im gleichen Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user agent")}} unterscheiden.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Gibt es keinen übergeordneten Kontext, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontextes ist. Ist der aktuelle Kontext der oberste Kontext, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, bei der das im `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die als grafische Absende-Schaltfläche dargestellt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Schaltflächeneingabe behandelt.

### width

Eine Zahl, die die Breite angibt, bei der das Bild gezeichnet werden soll, in CSS-Pixeln.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, wurde jedoch nicht von allen Browsern implementiert und ist inzwischen veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements, {{HTMLElement("map")}}, sein, das eine zu verwendende Bildkarte mit dem Bild definiert. Diese Nutzung ist veraltet; Sie sollten zur Verwendung des {{HTMLElement("img")}}-Elements wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bildschaltereingaben

Das `<input type="image">`-Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht von der CSS-Schicht generiert oder direkt verwaltet wird), das sich in ähnlicher Weise wie ein reguläres {{htmlelement("img")}}-Element verhält, aber mit den Fähigkeiten einer [Absende-Schaltfläche](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Funktionen der Bildschaltereingabe

Schauen wir uns ein einfaches Beispiel an, das alle wesentlichen Funktionen umfasst, die Sie verwenden müssen (Diese funktionieren genau so wie beim `<img>`-Element):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{ EmbedLiveSample('Essential_image_input_features', 600, 50) }}

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zum Bild anzugeben, das Sie auf der Schaltfläche anzeigen möchten.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet Alternativtext für das Bild, sodass Benutzer von Bildschirmlesegeräten eine bessere Vorstellung davon bekommen, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (z. B. wenn der Pfad falsch geschrieben ist). Verwenden Sie nach Möglichkeit Text, der mit der Beschriftung übereinstimmt, die Sie verwenden würden, wenn Sie eine Standardabsende-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixel. Die Schaltfläche ist gleich groß wie das Bild; wenn Sie möchten, dass der Trefferbereich der Schaltfläche größer als das Bild ist, müssen Sie CSS verwenden (z. B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{glossary("aspect ratio")}} beibehält.

### Überschreiben der Standardverhaltensweisen von Formularen

`<input type="image">`-Elemente — wie normale [Absende-Schaltflächen](/de/docs/Web/HTML/Element/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardverhalten des Formulars überschreiben:

- `formaction`
  - : Die URI eines Programms, das die durch das Eingabeelement eingereichten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers.
- `formenctype`

  - : Gibt den Typ des Inhalts an, der verwendet wird, um das Formular an den Server zu übermitteln. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers des Elements.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser zum Übermitteln des Formulars verwendet. Mögliche Werte sind:

    - `post`: Die Daten des Formulars werden im Körper des Formulars enthalten und an den Server gesendet.
    - `get`: Die Daten des Formulars werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers des Elements.

- `formnovalidate`
  - : Ein boolesches Attribut, das angibt, dass das Formular beim Absenden nicht validiert werden soll. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers des Elements.
- `formtarget`

  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort nach dem Absenden des Formulars angezeigt werden soll. Dies ist ein Name oder Schlüsselwort für einen _Browsing-Kontext_ (z. B. Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers des Elements. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self`: Lädt die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen Elternteil gibt, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Elternteil hat). Wenn es keinen Elternteil gibt, verhält sich diese Option wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einer Schaltfläche absenden, die mit `<input type="image">` erstellt wurde, werden vom Browser automatisch zwei zusätzliche Datenpunkte an den Server übermittelt — `x` und `y`. Sie können dies in Aktion in unserem [Beispiel für X Y-Koordinaten](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) sehen.

Wenn Sie auf das Bild klicken, um das Formular abzusenden, werden die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn das Bild-Eingabefeld ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, beachten Sie, dass der angegebene Name jedem Attribut vorangestellt wird. Wenn der `name` `position` ist, werden die zurückgegebenen Koordinaten im URL-format `?position.x=52&position.y=55` angegeben. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position des Bildes, auf das geklickt wurde, von Bedeutung ist. Beispielsweise könnten Sie eine Karte haben, die beim Klicken die geklickten Koordinaten an den Server sendet. Der Serverseitige Code ermittelt dann, welche Position angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der herausfindet, welche Farbe durch die übermittelten Koordinaten angeklickt wurde, und eine Zählung der Lieblingsfarben, für die die Leute gestimmt haben, führt.

### Anpassen der Position und Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Position des Bildes im Rahmen des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Damit können Sie einen Frame für das Bild mithilfe der Attribute `width` und `height` einrichten, um Platz im Layout zu reservieren, und dann festlegen, wo innerhalb dieses Platzes sich das Bild befindet und wie (oder ob) es skaliert wird, um diesen Platz einzunehmen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt denselben Button wie zuvor, jedoch im Kontext eines typischen Anmeldeformulars.

{{ EmbedLiveSample('A_login_form', 600, 170) }}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="100" />
  </div>
</form>
```

#### CSS

Und nun etwas einfaches CSS, um die grundlegenden Elemente ordentlicher anzuzeigen:

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}
```

### Anpassen der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild einzuräumen, und dann die tatsächliche Größe und Positionierung des Bildes mithilfe von {{cssxref("object-fit")}} und {{cssxref("object-position")}} zu justieren.

{{EmbedLiveSample("Adjusting_the_image_position_and_scaling", 600, 300)}}

#### HTML

```html
<form>
  <p>Login to your account</p>
  <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId" />
  </div>
  <div>
    <label for="pwd">Password</label>
    <input type="password" id="pwd" name="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"
      alt="Login"
      width="200"
      height="100" />
  </div>
</form>
```

#### CSS

```css
div {
  margin-bottom: 10px;
}

label {
  display: inline-block;
  width: 70px;
  text-align: right;
  padding-right: 10px;
}

#image {
  object-position: right top;
  object-fit: contain;
  background-color: #ddd;
}
```

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was anzeigt, dass das Bild in der größten Größe gezeichnet werden soll, die in das Element-Box passt, ohne sein Seitenverhältnis zu ändern. Beachten Sie, dass der sichtbare graue Hintergrund des Elements noch im Bereich sichtbar ist, der nicht vom Bild abgedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Element/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
    </tr>
     <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die {{domxref("HTMLInputElement")}}-Schnittstelle, die es implementiert.
- Das HTML-{{HTMLElement("img")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
