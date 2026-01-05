---
title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: 2eab0bc09a2972fda0f760abd5cfe06201b23498
---

{{HTMLElement("input")}}-Elemente vom Typ **`image`** werden verwendet, um grafische Submit-Schaltflächen zu erstellen, d.h. Submit-Schaltflächen, die in Form eines Bildes statt Text erscheinen.

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

Zusätzlich zu den Attributen, die alle {{HTMLElement("input")}}-Elemente gemeinsam haben, unterstützen `image`-Button-Eingaben die folgenden Attribute.

### alt

Das `alt`-Attribut liefert einen alternativen Text, der als Beschriftung der Schaltfläche verwendet wird, wenn das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "Benutzeragents")}}, der Bilder nicht anzeigen kann oder so konfiguriert ist, dass keine Bilder angezeigt werden, oder wenn der Benutzer ein Screenreader-Gerät benutzt). Wenn es angegeben ist, muss es ein nicht leerer String sein, der als Beschriftung für die Schaltfläche geeignet ist.

Zum Beispiel, wenn Sie eine grafische Schaltfläche haben, die ein Bild mit einem Icon und/oder dem Bildtext "Login Now" anzeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Login Now` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines angeben, um die Benutzerfreundlichkeit Ihrer Inhalte zu maximieren.

Funktional arbeitet das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut bei {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten übermittelt werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut auf dem {{HTMLElement("form")}}, zu dem das {{HTMLElement("input")}} gehört.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode angibt, die beim Übermitteln der Formulardaten an den Server verwendet werden soll. Es gibt drei erlaubte Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "prozent-encodiert")}} wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API, um die Daten zu verwalten, sodass Dateien an den Server übermittelt werden können. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente vom [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `file` ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Klartext; hauptsächlich nützlich für Debugging, um die Daten leicht zu sehen, die übermittelt werden sollen.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des zugehörigen Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Übermitteln der Formulardaten verwendet wird; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut, das im zugehörigen Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der URL begonnen wird, die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut gegeben ist, ein Fragezeichen ("?") angehängt wird und dann die Formulardaten angehängt werden, encodiert wie durch `formenctype` oder das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars beschrieben. Diese URL wird dann an den Server mit einer HTTP-{{HTTPMethod("get")}}-Anfrage gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Body der Anfrage enthalten, die an die durch das `formaction`- oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Anfrage gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den mit der Eingabe verbundenen Dialog schließt und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein logisches Attribut, das, wenn vorhanden, angibt, dass das Formular vor dem Übermitteln an den Server nicht validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs des zugehörigen Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Stichwort angibt, das angibt, wo die Antwort nach dem Senden des Formulars angezeigt werden soll. Der String muss der Name eines **Browsing-Kontexts** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt alle im [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formulars, das zu diesem Input gehört, gegebenen Ziele.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inlineframes gibt es einige spezielle Stichwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten, Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann jedoch je nach Konfiguration des {{Glossary("user_agent", "Benutzeragents")}} variieren.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den top-level Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das im `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei spezifiziert, die als grafische Submit-Schaltfläche angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Schaltflächeneingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, aber nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements, {{HTMLElement("map")}}, sein, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist veraltet; Sie sollten stattdessen das {{HTMLElement("img")}}-Element verwenden, wenn Sie Bildkarten verwenden möchten.

## Nutzung von Bildeingaben

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht durch die CSS-Layer generiert oder direkt verwaltet wird), das sich ähnlich wie ein reguläres {{htmlelement("img")}}-Element verhält, aber die Fähigkeiten einer [Submit-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit) hat.

### Wesentliche Merkmale von Bildeingaben

Lassen Sie uns ein einfaches Beispiel betrachten, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (Diese funktionieren genau wie beim `<img>`-Element.):

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

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild zu spezifizieren, das in der Schaltfläche angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut liefert Alternativtext für das Bild, sodass Screenreader-Benutzer besser verstehen können, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der dem Beschriftungstext entspricht, den Sie verwenden würden, wenn Sie eine Standard-Submit-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Die Schaltfläche ist so groß wie das Bild; wenn Sie die Trefferfläche der Schaltfläche größer als das Bild benötigen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Außerdem wird die andere Dimension automatisch angepasst, um das ursprüngliche {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes beizubehalten, wenn Sie nur eine Dimension angeben.

### Überschreiben der Standardformularverhalten

`<input type="image">`-Elemente – wie reguläre [Submit-Schaltflächen](/de/docs/Web/HTML/Reference/Elements/input/submit) – können eine Reihe von Attributen akzeptieren, die das Standardformularverhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Input-Element übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formular-Besitzers des Elements.
- `formenctype`
  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu übermitteln. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, falls das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formular-Besitzers des Elements.

- `formmethod`
  - : Gibt die HTTP-Methode an, die der Browser zum Übermitteln des Formulars verwendet. Mögliche Werte sind:
    - `post`: Die Daten des Formulars werden im Body des Formulars enthalten und an den Server gesendet.
    - `get`: Die Daten des Formulars werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Separator, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formular-Besitzers des Elements.

- `formnovalidate`
  - : Ein logisches Attribut, das angibt, dass das Formular nicht validiert wird, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formular-Besitzers des Elements.
- `formtarget`
  - : Ein Name oder Stichwort, das angibt, wo die Antwort angezeigt wird, die nach dem Übermitteln des Formulars empfangen wird. Dies ist ein Name oder Stichwort für einen _Browsing-Kontext_ (z.B. ein Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formular-Besitzers des Elements. Die folgenden Stichwörter haben spezielle Bedeutungen:
    - `_self`: Lädt die Antwort in denselben Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standardwert, falls das Attribut nicht angegeben ist.
    - `_blank`: Lädt die Antwort in einen neuen unbenannten Browsing-Kontext.
    - `_parent`: Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Lädt die Antwort in den top-level Browsing-Kontext (das ist der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat). Wenn es keinen Eltern gibt, verhält sich diese Option wie `_self`.

### Verwenden der x- und y-Datenpunkte

Wenn Sie ein Formular mit einer Schaltfläche übermitteln, die mit `<input type="image">` erstellt wurde, werden zwei zusätzliche Datenpunkte automatisch vom Browser an den Server übermittelt — `x` und `y`. Sie können dies in unserem [X Y Koordinaten-Beispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu übermitteln, werden die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn das Bildeingabe-Element ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, denken Sie daran, dass der angegebene Name jedem Attribut vorangestellt wird, sodass wenn der `name` `position` ist, die zurückgegebenen Koordinaten im Format `?position.x=52&position.y=55` in der URL formatiert würden. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular zu übermitteln, wobei (0,0) die obere linke Ecke des Bildes ist und die Voreinstellung, falls die Übermittlung ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf der das Bild geklickt wurde, von Bedeutung ist, zum Beispiel könnten Sie eine Karte haben, die beim Klicken die Koordinaten an den Server sendet, die geklickt wurden. Der serverseitige Code ermittelt dann, auf welchen Ort geklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, welche Farbe durch die übermittelten Koordinaten angeklickt wurde, und einen Zähler der Lieblingsfarben führt, für die die Leute abgestimmt haben.

### Anpassen der Position und Skalierungsalgorithmus des Bildes

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um in den Rahmen zu passen. Dies ermöglicht es Ihnen, einen Rahmen für das Bild mit den `width`- und `height`-Attributen festzulegen, um Platz im Layout zu reservieren, dann zu bestimmen, wo sich das Bild innerhalb dieses Raums befindet und wie (oder ob) es skaliert wird, um diesen Raum zu belegen.

## Beispiele

### Ein Login-Formular

Das folgende Beispiel zeigt dieselbe Schaltfläche wie zuvor, jedoch im Kontext eines typischen Login-Formulars.

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

Und nun etwas CSS, um die grundlegenden Elemente ordentlicher anzuordnen:

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

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Bildgröße und Positionierung mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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
  background-color: #dddddd;
}
```

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was anzeigt, dass das Bild in der größten Größe gezeichnet werden soll, die in den Elementrahmen passt, ohne das Seitenverhältnis zu verändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der noch im Bereich, der nicht durch das Bild abgedeckt ist, sichtbar ist.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>Keiner — das <code>value</code>-Attribut sollte nicht angegeben werden.</td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
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

- {{HTMLElement("input")}} und die [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle, die es implementiert.
- Das HTML-Element {{HTMLElement("img")}}
- Positionierung und Größe des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
