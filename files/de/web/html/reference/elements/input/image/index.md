---
title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Sende-Buttons zu erstellen, d.h. Sende-Buttons, die in Form eines Bildes statt eines Textes erscheinen.

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

Zusätzlich zu den Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut bietet einen alternativen Text, der als Label des Buttons verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User-Agent")}}, der keine Bilder anzeigen kann oder so konfiguriert ist, dass er sie nicht zeigt, oder wenn der Benutzer ein Bildschirmlesegerät verwendet). Wenn angegeben, muss es sich um einen nicht-leeren String handeln, der als Label für den Button geeignet ist.

Zum Beispiel, wenn Sie einen grafischen Button haben, der ein Bild mit einem Symbol und/oder Bildtext "Jetzt einloggen" zeigt, sollten Sie das `alt`-Attribut auf etwas wie `Jetzt einloggen` setzen.

> [!NOTE]
> Während das `alt`-Attribut technisch optional ist, sollten Sie immer eines einfügen, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}} besitzt.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die verwendet werden soll, wenn die Formulardaten an den Server gesendet werden. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String, nachdem der Text mittels eines Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "percent-encoded")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, wodurch es möglich ist, Dateien an den Server zu senden. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich für Debugging-Zwecke nützlich, damit Sie leicht die Daten sehen können, die gesendet werden sollen.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des besitzenden Formulars.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### formmethod

Ein String, der die HTTP-Methode angibt, die verwendet werden soll, wenn die Daten des Formulars gesendet werden; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das im besitzenden Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die vom `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben wird, dann ein Fragezeichen ("?") hinzugefügt wird und anschließend die Formulardaten angehängt werden, kodiert wie durch das `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars beschrieben. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Daten des Formulars werden im Körper der Anfrage enthalten, die mit einer HTTP-{{HTTPMethod("post")}}-Anfrage an die vom `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL gesendet wird. Mit dieser Methode können komplexe Daten und Dateianhänge verarbeitet werden.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass der Button den Dialog schließt, mit dem die Eingabe verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das angibt, dass das Formular nicht validiert werden soll, bevor es an den Server gesendet wird. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des Formulars, dem das Element gehört.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das anzeigt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Der String muss der Name eines **Browsing-Kontexts** sein (das heißt, ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut auf dem {{HTMLElement("form")}}-Element, das diese Eingabe besitzt, gegebene Zielattribut.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie denjenigen, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben wurde.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "User-Agent")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut steht auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen zur Verfügung.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, bei der das vom `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Sende-Button darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Button-Eingabe behandelt.

### width

Eine Zahl, die die Breite angibt, bei der das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde in HTML 4 für `image`-Eingaben definiert, aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkartenelements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Nutzung ist veraltet; Sie sollten auf das Verwenden des {{HTMLElement("img")}}-Elements umstellen, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bild-Eingaben

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht durch die CSS-Schicht erzeugt oder direkt verwaltet wird) und verhält sich in vielerlei Hinsicht wie ein reguläres {{htmlelement("img")}}-Element, jedoch mit den Fähigkeiten eines [Sende-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Funktionen der Bildeingabe

Werfen wir einen Blick auf ein Grundbeispiel, das alle wesentlichen Funktionen enthält, die Sie verwenden müssen (Diese funktionieren genau so wie beim `<img>`-Element.):

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

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild zu spezifizieren, das im Button angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut bietet Alt-Text für das Bild, sodass Benutzer mit Bildschirmlesegeräten eine bessere Vorstellung davon bekommen, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie einen Text, der mit dem Label übereinstimmt, das Sie verwenden würden, wenn Sie einen standardmäßigen Sende-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, bei der das Bild angezeigt werden soll, in Pixeln. Der Button hat die gleiche Größe wie das Bild; Wenn Sie die Trefferfläche des Buttons größer als das Bild machen müssen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreiben von Standardformularverhalten

`<input type="image">`-Elemente — wie reguläre [Sende-Buttons](/de/docs/Web/HTML/Reference/Elements/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardformularverhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formular-Eigentümers des Elements.
- `formenctype`

  - : Gibt den Typ des Inhalts an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formular-Eigentümers des Elements.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser verwendet, um das Formular zu senden. Mögliche Werte sind:

    - `post`: Die Daten aus dem Formular werden im Körper des Formulars enthalten und an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Separator, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formular-Eigentümers des Elements.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formular-Eigentümers des Elements.
- `formtarget`

  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies ist ein Name oder ein Schlüsselwort für einen _Browsing-Kontext_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formular-Eigentümers des Elements. Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie der aktuelle. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es kein Elternteil gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den obersten Browsing-Kontext (das heißt, der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat). Wenn es kein Elternteil gibt, verhält sich diese Option wie `_self`.

### Verwenden der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem Button erstellen, der mit `<input type="image">` erzeugt wurde, werden zwei zusätzliche Datenpunkte automatisch vom Browser an den Server gesendet — `x` und `y`. Sie können dies in unserem [X Y Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, werden die Daten an die URL als Parameter angehängt, zum Beispiel `?x=52&y=55`. Wenn das Bildeingabe-Element ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, beachten Sie, dass der angegebene Name jedem Attribut vorangestellt wird. Wenn der `name` zum Beispiel `position` ist, dann würden die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert werden. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf die die Maus geklickt hat, um das Formular zu senden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standardwert, falls die Übertragung ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, von Bedeutung ist. Beispielsweise könnten Sie eine Karte haben, die bei einem Klick die Koordinaten, die geklickt wurden, an den Server sendet. Der serverseitige Code ermittelt dann, welcher Ort angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, auf welche Farbe durch die gesendeten Koordinaten geklickt wurde, und eine Zählung der beliebtesten Farben führt, für die Leute gestimmt haben.

### Anpassung der Bildposition und des Skalierungsalgorithmus

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um innerhalb des Rahmens zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen zu spezifizieren, um im Layout Platz zu schaffen, dann anzupassen, wo innerhalb dieses Raums das Bild positioniert wird und wie (oder ob) es skaliert wird, um diesen Raum zu besetzen.

## Beispiele

### Ein Anmeldeformular

Das folgende Beispiel zeigt denselben Button wie zuvor, aber im Kontext eines typischen Anmeldeformulars eingeschlossen.

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

Und nun etwas CSS, um die grundlegenden Elemente besser zu positionieren:

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

### Anpassung der Bildposition und der Skalierung

In diesem Beispiel passen wir das vorherige Beispiel so an, dass mehr Platz für das Bild reserviert wird und dann die tatsächliche Größe und Positionierung des Bildes mithilfe von {{cssxref("object-fit")}} und {{cssxref("object-position")}} angepasst wird.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was angibt, dass das Bild in der größtmöglichen Größe gezeichnet werden soll, die in das Elementfeld passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der immer noch in dem Bereich sichtbar ist, der nicht vom Bild bedeckt ist.

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Reference/Elements/input#alt"><code>alt</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#src"><code>src</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#width"><code>width</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#height"><code>height</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formaction"><code>formaction</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formenctype"><code>formenctype</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formmethod"><code>formmethod</code></a>,
        <a href="/de/docs/Web/HTML/Reference/Elements/input#formnovalidate"><code>formnovalidate</code></a>,
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
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}} und die Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), die es implementiert.
- Das HTML-Element {{HTMLElement("img")}}
- Positionierung und Größe des Bildes innerhalb des `<input>`-Rahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
