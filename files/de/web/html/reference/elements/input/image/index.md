---
title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Absenden-Schaltflächen zu erstellen, d.h. Absenden-Schaltflächen, die die Form eines Bildes anstelle von Text annehmen.

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

`<input type="image">`-Elemente akzeptieren keine `value`-Attribute. Der Pfad zum anzuzeigenden Bild wird im `src`-Attribut angegeben.

## Zusätzliche Attribute

Zusätzlich zu den von allen {{HTMLElement("input")}}-Elementen geteilten Attributen unterstützen `image`-Schaltflächen-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut bietet einen alternativen Text, der als Beschriftung der Schaltfläche verwendet wird, falls das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "Benutzeragenten")}}, der keine Bilder anzeigen kann oder konfiguriert ist, keine Bilder anzuzeigen, oder wenn der Benutzer ein Gerät zur Bildschirmlesung verwendet). Wenn vorhanden, muss es ein nicht-leerer String sein, der als Beschriftung für die Schaltfläche geeignet ist.

Zum Beispiel, wenn Sie eine grafische Schaltfläche haben, die ein Bild mit einem Symbol und/oder Bildtext "Login Now" zeigt, sollten Sie das `alt`-Attribut auch auf etwas wie `Login Now` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines einfügen, um die Benutzerfreundlichkeit Ihres Inhalts zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genau wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut bei {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des {{HTMLElement("form")}}-Elements, dem das {{HTMLElement("input")}} gehört.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String, nachdem der Text durch ein Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozentencodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, wodurch Dateien an den Server gesendet werden können. Sie _müssen_ diese Kodierung verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Nur für Debugging nützlich, da es die Daten als Klartext sendet, damit man leicht sehen kann, welche Daten gesendet werden.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes im besitzenden Formular angegebene [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut. Zulässige Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegeben ist, ein Fragezeichen ("?") angehängt wird und dann die Formulardaten, kodiert wie durch `formenctype` oder dem [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars beschrieben, angehängt werden. Diese URL wird dann als HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Body der an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL gesendeten Anfrage aufgenommen, unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem der Input verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, falls vorhanden, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden soll. Dieses Attribut überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des besitzenden Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, das angibt, wo die nach dem Senden des Formulars empfangene Antwort angezeigt werden soll. Der String muss der Name eines **browsing context** (das heißt, eines Tabs, Fensters oder {{HTMLElement("iframe")}}) sein. Ein hier angegebener Wert überschreibt jedes durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut auf dem {{HTMLElement("form")}}, dem dieses Input gehört, angegebene Ziel.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, in dem sich das Formular befindet. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "Benutzeragenten")}} abweichen.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen ist. Wenn der aktuelle Kontext der oberste ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um die grafische Absenden-Schaltfläche darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird der Input wie jeder andere Schaltflächen-Input behandelt.

### width

Eine Zahl, die die Breite in CSS-Pixeln angibt, in der das Bild gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Inputs definiert, aber nicht von allen Browsern implementiert und ist mittlerweile veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements, {{HTMLElement("map")}}, sein, das eine zu verwendende Bildkarte mit dem Bild definiert. Diese Verwendung ist veraltet; Sie sollten auf die Verwendung des {{HTMLElement("img")}}-Elements umsteigen, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Bild-Inputs

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht erzeugt oder direkt von der CSS-Ebene verwaltet wird) und verhält sich in vielerlei Hinsicht wie ein reguläres {{htmlelement("img")}}-Element, jedoch mit den Fähigkeiten einer [Absenden-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Bild-Input-Funktionen

Sehen wir uns ein grundlegendes Beispiel an, das alle wesentlichen Funktionen enthält, die Sie verwenden müssen (diese funktionieren genau wie beim `<img>`-Element):

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
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut bietet Alt-Text für das Bild, so dass Bildschirmleser-Benutzer eine bessere Vorstellung davon haben, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (z.B. wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der mit der Beschriftung übereinstimmt, die Sie verwenden würden, wenn Sie eine standardmäßige Absenden-Schaltfläche verwenden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Die Schaltfläche hat die gleiche Größe wie das Bild; wenn Sie benötigen, dass der Trefferbereich der Schaltfläche größer als das Bild ist, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, damit das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreiben der Standard-Formularverhalten

`<input type="image">`-Elemente – wie reguläre [Absenden-Schaltflächen](/de/docs/Web/HTML/Reference/Elements/input/submit) – können eine Reihe von Attributen akzeptieren, die das Standardverhalten des Formulars überschreiben:

- `formaction`
  - : Die URI eines Programms, das die Informationen verarbeitet, die vom Input-Element übermittelt werden; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularinhabers des Elements.
- `formenctype`

  - : Gibt den Inhaltstyp an, der beim Senden des Formulars an den Server verwendet wird. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularinhabers des Elements.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser zum Senden des Formulars verwendet. Mögliche Werte sind:

    - `post`: Die Daten aus dem Formular werden im Body des Formulars eingeschlossen und an den Server gesendet.
    - `get`: Die Daten aus dem Formular werden an die **`form`**-Attribute-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebenwirkungen hat und nur ASCII-Zeichen enthält.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularinhabers des Elements.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es abgesendet wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularinhabers des Elements.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die empfangene Antwort nach dem Absenden des Formulars angezeigt werden soll. Dies ist ein Name oder Schlüsselwort für einen _browsing context_ (z.B. Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularinhabers des Elements. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Die Antwort wird im selben Browsing-Kontext wie der aktuelle geladen. Dieser Wert ist der Standard, wenn das Attribut nicht angegeben ist.
    - `_blank`: Die Antwort wird in einen neuen unbenannten Browsing-Kontext geladen.
    - `_parent`: Die Antwort wird in den übergeordneten Browsing-Kontext des aktuellen geladen. Wenn kein übergeordneter vorhanden ist, verhält sich diese Option wie `_self`.
    - `_top`: Die Antwort wird in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat) geladen. Wenn kein übergeordneter vorhanden ist, verhält sich diese Option wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einer mit `<input type="image">` erstellten Schaltfläche absenden, übermittelt der Browser automatisch zwei zusätzliche Datenpunkte an den Server — `x` und `y`. Dies können Sie in unserem [X Y-Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, sehen Sie, wie die Daten als Parameter an die URL angehängt werden, z.B. `?x=52&y=55`. Wenn das Bild-Input ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, wird der angegebene Name auf jedes Attribut mit einem Präfix versehen, so dass, wenn der `name` `position` ist, die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert werden. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard, falls die Übermittlung ohne Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die das Bild geklickt wurde, von Bedeutung ist, z.B. können Sie eine Karte haben, die beim Klick die angeklickten Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welcher Ort angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, auf welche Farbe durch die übermittelten Koordinaten geklickt wurde, und eine Zählung der Lieblingsfarben, für die die Leute abgestimmt haben, führt.

### Anpassen der Position und Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Position des Bildes innerhalb des Rahmens des `<input>`-Elements anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um in den Rahmen zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen festzulegen, um im Layout Platz zu reservieren, dann anzupassen, wo innerhalb dieses Raumes sich das Bild befindet und wie (oder ob) es skaliert wird, um diesen Raum zu füllen.

## Beispiele

### Ein Login-Formular

Das folgende Beispiel zeigt die gleiche Schaltfläche wie zuvor, jedoch im Kontext eines typischen Login-Formulars.

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

Und nun etwas CSS, um die grundlegenden Elemente ordentlicher anzuzeigen:

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

### Anpassen der Bildposition und -skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Bildgröße und -positionierung mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was darauf hinweist, dass das Bild in der größtmöglichen Größe gezeichnet werden soll, die in den Rahmen des Elements passt, ohne sein Seitenverhältnis zu ändern. Beachten Sie den immer noch sichtbaren grauen Hintergrund des Elements im Bereich, der nicht vom Bild bedeckt ist.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keine — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>Keine.</td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
- Das HTML-{{HTMLElement("img")}}-Element
- Positionierung und Größenanpassung des Bildes im Rahmen des `<input>`-Elements: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
