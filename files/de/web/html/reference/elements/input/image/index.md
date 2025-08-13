---
title: <input type="image">
slug: Web/HTML/Reference/Elements/input/image
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

{{HTMLElement("input")}}-Elemente des Typs **`image`** werden verwendet, um grafische Sende-Schaltflächen zu erstellen, d.h. Sende-Schaltflächen, die in Form eines Bildes statt eines Textes erscheinen.

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

Neben den Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen `image`-Button-Inputs die folgenden Attribute.

### alt

Das `alt`-Attribut bietet einen alternativen Text für die Schaltfläche, wenn das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "Benutzer-Agents")}}, der Bilder nicht anzeigen kann oder so konfiguriert ist, dass er keine Bilder anzeigt, oder wenn der Nutzer ein Bildschirmlesegerät verwendet). Wenn angegeben, muss es sich um einen nicht-leeren String handeln, der als Beschriftung für die Schaltfläche geeignet ist.

Beispielsweise, wenn Sie eine grafische Schaltfläche mit einem Bild und/oder Text "Jetzt einloggen" haben, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt einloggen` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines angeben, um die Benutzerfreundlichkeit Ihres Inhalts zu maximieren.

Funktional funktioniert das `alt`-Attribut des `<input type="image">`-Elements genauso wie das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Attribut auf {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut auf dem {{HTMLElement("form")}}-Element, das das {{HTMLElement("input")}}-Element besitzt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies, der Standardwert, sendet die Formulardaten als String nach der {{Glossary("Percent-encoding", "Prozent-Kodierung")}} des Textes mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, was das Senden von Dateien an den Server ermöglicht. Sie _müssen_ diesen Kodierungstyp verwenden, wenn Ihr Formular {{HTMLElement("input")}}-Elemente des Typs [`file`](/de/docs/Web/HTML/Reference/Elements/input#type) ([`<input type="file">`](/de/docs/Web/HTML/Reference/Elements/input/file)) enthält.
- `text/plain`
  - : Nur einfacher Text; größtenteils nur zum Debuggen nützlich, damit Sie die zu übermittelnden Daten leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des inhabenden Formulars.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Senden der Formulardaten verwendet werden soll; dieser Wert überschreibt alle auf dem besitzenden Formular angegebenen [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribute. Zulässige Werte sind:

- `get`
  - : Eine URL wird konstruiert, indem mit der im `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebenen URL begonnen wird, ein Fragezeichen ("?") angehängt wird und dann die Formulardaten, kodiert wie im `formenctype` oder im [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formulars beschrieben, angehängt werden. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebenwirkungen haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten sind im Körper der Anfrage enthalten, die an die im `formaction` oder [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut angegebene URL mit einer HTTP-{{HTTPMethod("post")}}-Anfrage gesendet wird. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode wird verwendet, um anzuzeigen, dass die Schaltfläche den Dialog schließt, mit dem das Eingabeelement verknüpft ist, und die Formulardaten überhaupt nicht übermittelt.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein Boolean-Attribut, das, wenn es vorhanden ist, angibt, dass das Formular nicht vor dem Senden an den Server validiert werden soll. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attributs auf dem besitzenden Formular des Elements.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Schlüsselwort angibt, welches angibt, wo die Antwort angezeigt wird, die nach dem Senden des Formulars empfangen wird. Der String muss der Name eines **Browsingskontextes** sein (d.h. eines Tabs, Fensters oder {{HTMLElement("iframe")}}. Ein hier angegebener Wert überschreibt jedes Ziel, das durch das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut auf dem {{HTMLElement("form")}}-Element angegeben wird, das diese Eingabe besitzt.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in den gleichen Browsing-Kontext, der das Formular enthält. Dies ersetzt das aktuelle Dokument durch die empfangenen Daten. Dies ist der Standardwert, wenn keiner angegeben wird.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im gleichen Fenster wie das aktuelle Dokument, kann sich jedoch je nach Konfiguration des {{Glossary("user_agent", "Benutzer-Agents")}} unterscheiden.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext der aktuellen. Wenn es keinen übergeordneten Kontext gibt, verhält sich dies wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahre des aktuellen Kontextes ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies wie `_self`.

Dieses Attribut ist auch auf [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit)- und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in denen das durch das `src`-Attribut angegebene Bild gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die zur Darstellung der grafischen Sende-Schaltfläche angezeigt werden soll. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Schaltfächeneingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixeln gezeichnet werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, jedoch nicht von allen Browsern implementiert und ist seitdem veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkartenelements, {{HTMLElement("map")}}, sein, das eine Bildkarte zur Verwendung mit dem Bild definiert. Diese Verwendung ist veraltet; Sie sollten stattdessen das {{HTMLElement("img")}}-Element verwenden, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Image-Inputs

Das `<input type="image">`-Element ist ein {{Glossary("replaced_elements", "ersetztes Element")}} (ein Element, dessen Inhalt nicht durch die CSS-Ebene generiert oder direkt verwaltet wird), das sich genauso verhält wie ein reguläres {{htmlelement("img")}}-Element, jedoch mit den Fähigkeiten einer [Sende-Schaltfläche](/de/docs/Web/HTML/Reference/Elements/input/submit).

### Wesentliche Funktionen von Image-Inputs

Lassen Sie uns ein einfaches Beispiel betrachten, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (Diese funktionieren genau so, wie sie auch beim `<img>`-Element funktionieren.):

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

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut wird verwendet, um den Pfad zu dem Bild anzugeben, das in der Schaltfläche angezeigt werden soll.
- Das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut bietet Alt-Text für das Bild, damit Benutzer von Bildschirmlesegeräten besser verstehen, wofür die Schaltfläche verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht angezeigt werden kann (zum Beispiel wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie einen Text, der der Beschriftung entspricht, die Sie verwenden würden, wenn Sie eine Standard-Sende-Schaltfläche verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)- und [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Die Schaltfläche hat die gleiche Größe wie das Bild; wenn Sie das Klickgebiet der Schaltfläche größer machen müssen als das Bild, müssen Sie CSS verwenden (z. B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch angepasst, sodass das Bild sein ursprüngliches {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Überschreiben von Standard-Formularverhalten

`<input type="image">`-Elemente — wie reguläre [Sende-Schaltbuttons](/de/docs/Web/HTML/Reference/Elements/input/submit) — können eine Anzahl von Attributen akzeptieren, die das Standardformularverhalten überschreiben:

- `formaction`
  - : Die URI eines Programms, das die vom Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des Formularbesitzers des Elements.
- `formenctype`
  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:
    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des Formularbesitzers des Elements.

- `formmethod`
  - : Gibt die HTTP-Methode an, die der Browser beim Senden des Formulars verwendet. Mögliche Werte sind:
    - `post`: Die Formulardaten werden im Formularkörper enthalten und an den Server gesendet.
    - `get`: Die Formulardaten werden der **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebenwirkungen hat und nur ASCII-Zeichen enthält.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des Formularbesitzers des Elements.

- `formnovalidate`
  - : Ein Boolean-Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des Formularbesitzers des Elements.
- `formtarget`
  - : Ein Name oder Schlüsselwort, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies ist der Name eines, oder ein Schlüsselwort für einen _Browsingskontext_ (zum Beispiel Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des Formularbesitzers des Elements. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self`: Laden Sie die Antwort in den gleichen Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standardwert, wenn das Attribut nicht angegeben ist.
    - `_blank`: Laden Sie die Antwort in einen neuen, unbenannten Browsing-Kontext.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing-Kontext der aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.

### Verwendung der x- und y-Datenpunkte

Wenn Sie ein Formular mit einer über `<input type="image">` erstellten Schaltfläche übermitteln, werden zwei zusätzliche Datenpunkte automatisch vom Browser an den Server gesendet — `x` und `y`. Dies können Sie in unserem [X-Y-Koordinatenbeispiel](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular zu senden, sehen Sie die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn die Bild-Eingabe ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut hat, beachten Sie, dass der angegebene Name jedem Attribut vorangestellt ist. Wenn der `name` `position` ist, dann würden die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das geklickt wurde, um das Formular zu senden, wobei (0,0) die obere linke Ecke des Bildes ist und der Standard für den Fall, dass das Senden ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die geklickt wurde, wichtig ist, zum Beispiel könnten Sie eine Karte haben, die beim Anklicken die geklickten Koordinaten an den Server sendet. Die Serverseite könnte dann berechnen, welche Position angeklickt wurde und Informationen über nahegelegene Orte zurückgeben.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der berechnet, welche Farbe durch die gesendeten Koordinaten angeklickt wurde, und eine Aufzählung der beliebtesten Farben, für die die Leute gestimmt haben, führen.

### Anpassen der Bildposition und des Skalierungsalgorithmus

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Größe des Bildes angepasst wird, um in den Rahmen zu passen. Dies ermöglicht Ihnen, mit Hilfe der `width`- und `height`-Attribute einen Rahmen für das Bild zu spezifizieren, um im Layout Platz zu schaffen, und dann anzupassen, wo innerhalb dieses Raums das Bild positioniert wird und wie (oder ob) es skaliert wird, um diesen Raum zu nutzen.

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

Und jetzt etwas CSS, um die Grundelemente ordentlicher anzuzeigen:

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

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild bereitzustellen und dann die tatsächliche Größe und Positionierung des Bildes mit {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was angibt, dass das Bild in der größten Größe gezeichnet werden soll, die innerhalb des Elementrahmens passt, ohne das Seitenverhältnis zu ändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der im Bereich sichtbar ist, der nicht durch das Bild abgedeckt ist.

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
- Positionierung und Größe des Bildes innerhalb des Frames des `<input>`-Elements: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
