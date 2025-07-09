---
title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{HTMLElement("input")}}-Elemente des Typs **`image`** werden verwendet, um grafische Absende-Schaltflächen zu erstellen, d.h. Absende-Schaltflächen, die die Form eines Bildes annehmen statt Text.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;image&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<p>Sign in to your account:</p>

<div>
  <label for="userId">User ID</label>
  <input type="text" id="userId" name="userId" />
</div>

<input
  type="image"
  id="image"
  alt="Login"
  src="/shared-assets/images/examples/login-button.png" />
```

```css interactive-example
label {
  font-size: 0.8rem;
}

label,
input[type="image"] {
  margin-top: 1rem;
}

input[type="image"] {
  width: 80px;
}
```

## Wert

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zu dem anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `image`-Button-Inputs die folgenden Attribute.

### alt

Das `alt`-Attribut bietet eine alternative Zeichenkette, die als Bezeichnung der Schaltfläche verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "Benutzeragenten")}}, der keine Bilder anzeigen kann oder konfiguriert ist, dies nicht zu tun, oder wenn der Nutzer ein Bildschirmlese-Gerät verwendet). Wenn es angegeben wird, muss es eine nicht-leere Zeichenkette sein, die als Bezeichnung der Schaltfläche geeignet ist.

Beispielsweise, wenn Sie eine grafische Schaltfläche haben, die ein Bild mit einem Icon und/oder Bildtext "Jetzt einloggen" zeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt einloggen` setzen.

> [!NOTE]
> Auch wenn das `alt`-Attribut technisch optional ist, sollten Sie es immer einfügen, um die Nutzbarkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genau wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Eine Zeichenkette, die die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut auf dem {{HTMLElement("form")}}-Element, dem das {{HTMLElement("input")}} gehört.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### formenctype

Eine Zeichenkette, die die Codierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es sind drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als eine Zeichenkette nach der {{Glossary("Percent-encoding", "Percent-encoding")}} des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, die es ermöglicht, Dateien an den Server zu senden. Sie _müssen_ diesen Codierungstyp verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente vom Typ [`file`](/de/docs/Web/HTML/Reference/Elements/input#type) enthält ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)).
- `text/plain`
  - : Reiner Text; hauptsächlich nützlich zum Debuggen, sodass Sie die Daten, die gesendet werden sollen, leicht sehen können.

Wenn dieser Wert angegeben wird, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Besitzerformulars.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### formmethod

Eine Zeichenkette, die die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet wird; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das auf dem Besitzerformular angegeben wurde. Erlaubte Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben ist, ein Fragezeichen ("?") angehängt wird und anschließend die Formulardaten, codiert wie durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars beschrieben, angehängt werden. Diese URL wird dann mit einer HTTP {{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Körper der Anfrage enthalten, die an die URL gesendet wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben ist, unter Verwendung einer HTTP {{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem das Eingabefeld verbunden ist, und die Formulardaten nicht übermittelt.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### formnovalidate

Ein boolesches Attribut, das, wenn es vorhanden ist, angibt, dass das Formular vor dem Absenden an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs auf dem Besitzerformular des Elements.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### formtarget

Eine Zeichenkette, die einen Namen oder ein Schlüsselwort angibt, das zeigt, wo die Antwort angezeigt wird, die nach dem Absenden des Formulars empfangen wird. Die Zeichenkette muss der Name eines **browsing context** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut auf dem {{HTMLElement("form")}} angegeben ist, dem diese Eingabe gehört.

Neben den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es ein paar spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den gleichen Browsing-Kontext wie die, die das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann sich jedoch je nach Konfiguration des {{Glossary("user_agent", "Benutzeragenten")}} unterscheiden.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, bei der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Eine Zeichenkette, die die URL der Bilddatei angibt, die angezeigt werden soll, um die grafische Absende-Schaltfläche darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe behandelt wie jede andere Schaltflächeneingabe.

### width

Eine Zahl, die die Breite angibt, bei der das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Inputs definiert, aber nicht von allen Browsern implementiert und wurde seitdem als veraltet markiert.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements {{HTMLElement("map")}} sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Nutzung ist veraltet; Sie sollten zum Verwenden des {{HTMLElement("img")}}-Elements wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Image-Inputs

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht von der CSS-Schicht generiert oder direkt verwaltet wird), das sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element verhält, aber mit den Fähigkeiten einer [Absende-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Funktionen von Image-Inputs

Werfen wir einen Blick auf ein grundlegendes Beispiel, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (Diese funktionieren genau gleich wie beim `<img>`-Element.):

```html
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

{{EmbedLiveSample('Essential_image_input_features', 600, 50)}}

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das in der Schaltfläche angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut bietet einen Alt-Text für das Bild, damit Bildschirmlesegeräte-Nutzer besser verstehen können, wofür die Schaltfläche verwendet wird. Er wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie einen Text, der mit dem Etikett übereinstimmt, das Sie verwenden würden, wenn Sie eine Standard-Absende-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, bei der das Bild in Pixeln angezeigt werden soll. Die Schaltfläche hat die gleiche Größe wie das Bild; wenn Sie möchten, dass der Erfassungsbereich der Schaltfläche größer ist als das Bild, müssen Sie CSS verwenden (zum Beispiel {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Standardformularverhalten überschreiben

`<input type="image">`-Elemente – wie reguläre [Absende-Schaltflächen](/de/docs/Web/HTML/Reference/Elements/input/submit) – können eine Reihe von Attributen akzeptieren, die das Standardformularverhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die von dem Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formulareigentümers.
- `formenctype`
  - : Bestimmt den Typ des Inhalts, der verwendet wird, um das Formular an den Server zu übermitteln. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, falls das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulareigentümers.

- `formmethod`
  - : Bestimmt die HTTP-Methode, die der Browser beim Übermitteln des Formulars verwendet. Mögliche Werte sind:
    - `post`: Die Daten des Formulars werden im Körper des Formulars enthalten und an den Server gesendet.
    - `get`: Die Daten des Formulars werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formulareigentümers.

- `formnovalidate`
  - : Ein boolesches Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formulareigentümers.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die nach dem Senden des Formulars empfangene Antwort angezeigt werden soll. Dies ist ein Name oder Schlüsselwort für einen _browsing context_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formulareigentümers. Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self`: Lädt die Antwort in den gleichen Browsing-Kontext wie der aktuelle. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein Elternteil vorhanden ist, verhält sich diese Option genauso wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn kein Elternteil vorhanden ist, verhält sich diese Option genauso wie `_self`.

### Die x- und y-Datenpunkte verwenden

Wenn Sie ein Formular mit einer Schaltfläche erstellen, die mit `<input type="image">` erstellt wurde, werden zwei zusätzliche Datenpunkte automatisch von der Eingabe durch den Browser an den Server gesendet — `x` und `y`. Sie können dies in unserem [X Y-Koordinatenbeispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, werden Sie sehen, dass die Daten als Parameter an die URL angehängt werden, z.B. `?x=52&y=55`. Wenn die Bild-Eingabe ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, denken Sie daran, dass der angegebene Name jedem Attribut vorangestellt wird, also wenn der `name` `position` ist, dann wären die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular zu senden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls das Senden ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, signifikant ist, zum Beispiel könnte man eine Karte haben, die beim Klicken die Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, auf welchen Ort geklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, welche Farbe durch die übermittelten Koordinaten angeklickt wurde, und eine Abstimmung der Lieblingsfarben der Personen führt.

### Anpassung der Position und des Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Position des Bildes innerhalb des `<input>`-Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um in den Rahmen zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen bereitzustellen, um Platz im Layout zu reservieren, und dann festzulegen, wo das Bild sich innerhalb dieses Raums befindet und wie (oder ob) es skaliert werden soll, um diesen Raum zu füllen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt die gleiche Schaltfläche wie zuvor, jedoch im Kontext eines typischen Anmeldeformulars.

{{EmbedLiveSample('A_login_form', 600, 170)}}

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

Und nun etwas CSS, um die grundlegenden Elemente etwas ordentlich zu positionieren:

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

### Anpassung der Bildposition und -skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild vorzusehen und dann die tatsächliche Größe und Positionierung des Bildes mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was angibt, dass das Bild in der größten Größe gezeichnet werden soll, die in den Rahmen des Elements passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den grauen Hintergrund des Elements, der in dem Bereich noch sichtbar ist, der nicht vom Bild abgedeckt wird.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keine — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formnovalidate</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formtarget"><code>formtarget</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>Keine.</td>
    </tr>
     <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- Das HTML {{HTMLElement("img")}}-Element
- Positionieren und Skalieren des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
