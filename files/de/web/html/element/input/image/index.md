---
title: <input type="image">
slug: Web/HTML/Element/input/image
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`image`** werden verwendet, um grafische Sende-Buttons zu erstellen, das heißt, Sende-Buttons, die in Form eines Bildes statt Text erscheinen.

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

Das `alt`-Attribut bietet einen alternativen Text, der als Bezeichnung des Buttons verwendet werden kann, wenn das Bild nicht angezeigt werden kann (aufgrund eines Fehlers, eines {{Glossary("user_agent", "User Agent")}}, der Bilder nicht anzeigen kann oder konfiguriert ist, keine Bilder zu zeigen, oder wenn der Benutzer ein Gerät zur Bildschirmlesung nutzt). Wenn vorhanden, muss es ein nicht-leerer String sein, der als Beschriftung des Buttons geeignet ist.

Zum Beispiel, wenn Sie einen grafischen Button haben, der ein Bild mit einem Symbol und/oder Text "Jetzt anmelden" zeigt, sollten Sie auch das `alt`-Attribut auf etwas wie `Jetzt anmelden` setzen.

> [!NOTE]
> Obwohl das `alt`-Attribut technisch optional ist, sollten Sie immer eines angeben, um die Nutzbarkeit Ihres Inhalts zu maximieren.

In der Funktionalität arbeitet das `alt`-Attribut des `<input type="image">`-Elements genau wie das [`alt`](/de/docs/Web/HTML/Element/img#alt)-Attribut von {{HTMLElement("img")}}-Elementen.

### formaction

Ein String, der die URL angibt, an die die Daten gesendet werden sollen. Dies hat Vorrang vor dem [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des {{HTMLElement("form")}}-Elements, das das {{HTMLElement("input")}}-Element besitzt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formenctype

Ein String, der die Kodierungsmethode identifiziert, die beim Senden der Formulardaten an den Server verwendet werden soll. Es gibt drei zulässige Werte:

- `application/x-www-form-urlencoded`
  - : Dies ist der Standardwert und sendet die Formulardaten als String, nachdem der Text mit einem Algorithmus wie {{jsxref("encodeURI", "encodeURI()")}} {{Glossary("Percent-encoding", "percent-encoding")}} verwendet wurde.
- `multipart/form-data`
  - : Verwendet die [`FormData`](/de/docs/Web/API/FormData)-API zur Verwaltung der Daten, was es ermöglicht, Dateien an den Server zu senden. Diese Kodierung müssen Sie verwenden, wenn Ihr Formular irgendwelche {{HTMLElement("input")}}-Elemente des Typs [`file`](/de/docs/Web/HTML/Element/input#type) ([`<input type="file">`](/de/docs/Web/HTML/Element/input/file)) enthält.
- `text/plain`
  - : Reiner Text; hauptsächlich nützlich nur für Debugging-Zwecke, damit Sie die Daten, die gesendet werden sollen, leicht sehen können.

Wenn angegeben, überschreibt der Wert des `formenctype`-Attributs das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des zugehörigen Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formmethod

Ein String, der die HTTP-Methode angibt, die beim Versenden der Formulardaten verwendet werden soll; dieser Wert überschreibt jedes [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut, das im zugehörigen Formular angegeben ist. Zulässige Werte sind:

- `get`
  - : Eine URL wird erstellt, indem mit der URL begonnen wird, die durch das `formaction`- oder das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wurde. Ein Fragezeichen ("?") wird hinzugefügt und danach werden die Formulardaten, kodiert, wie im `formenctype`- oder im [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formulars beschrieben, hinzugefügt. Diese URL wird dann mit einer HTTP-{{HTTPMethod("get")}}-Anfrage an den Server gesendet. Diese Methode funktioniert gut für einfache Formulare, die nur {{Glossary("ASCII", "ASCII")}}-Zeichen enthalten und keine Nebeneffekte haben. Dies ist der Standardwert.
- `post`
  - : Die Formulardaten werden im Body der Anfrage enthalten, die an die URL gesendet wird, die durch das `formaction`- oder das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut angegeben wurde, unter Verwendung einer HTTP-{{HTTPMethod("post")}}-Anfrage. Diese Methode unterstützt komplexe Daten und Dateianhänge.
- `dialog`
  - : Diese Methode gibt an, dass der Button den Dialog schließt, mit dem die Eingabe verknüpft ist, und die Formulardaten überhaupt nicht überträgt.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formnovalidate

Ein logisches Attribut, das, wenn es vorhanden ist, angibt, dass das Formular vor dem Senden an den Server nicht validiert werden sollte. Dies überschreibt den Wert des [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attributs des zugehörigen Formulars.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### formtarget

Ein String, der einen Namen oder ein Stichwort angibt, das festlegt, wo die Antwort, die nach dem Absenden des Formulars empfangen wird, angezeigt werden soll. Der String muss der Name eines **Browsing-Kontexts** sein (d.h. ein Tab, Fenster oder {{HTMLElement("iframe")}}). Ein hier angegebener Wert überschreibt jedes durch das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formulars, das dieses Eingabeelement besitzt, angegebene Ziel.

Zusätzlich zu den tatsächlichen Namen von Tabs, Fenstern oder Inline-Frames gibt es einige spezielle Schlüsselwörter, die verwendet werden können:

- `_self`
  - : Lädt die Antwort in denselben Browsing-Kontext wie das Formular. Dies ersetzt das aktuelle Dokument mit den empfangenen Daten. Dies ist der Standardwert, der verwendet wird, wenn keiner angegeben ist.
- `_blank`
  - : Lädt die Antwort in einen neuen, unbenannten Browsing-Kontext. Dies ist typischerweise ein neuer Tab im selben Fenster wie das aktuelle Dokument, kann aber je nach Konfiguration des {{Glossary("user_agent", "User Agent")}} unterschiedlich sein.
- `_parent`
  - : Lädt die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich dies genauso wie `_self`.
- `_top`
  - : Lädt die Antwort in den obersten Browsing-Kontext; dies ist der Browsing-Kontext, der der oberste Vorfahr des aktuellen Kontexts ist. Wenn der aktuelle Kontext der oberste Kontext ist, verhält sich dies genauso wie `_self`.

Dieses Attribut ist auch bei [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit) und {{HTMLElement("button")}}-Elementen verfügbar.

### height

Eine Zahl, die die Höhe in CSS-Pixeln angibt, in der das Bild, das durch das `src`-Attribut angegeben wird, gezeichnet werden soll.

### src

Ein String, der die URL der Bilddatei angibt, die angezeigt werden soll, um den grafischen Sende-Button darzustellen. Wenn der Benutzer mit dem Bild interagiert, wird die Eingabe wie jede andere Button-Eingabe behandelt.

### width

Eine Zahl, die die Breite angibt, in der das Bild in CSS-Pixeln dargestellt werden soll.

## Veraltete Attribute

Das folgende Attribut wurde von HTML 4 für `image`-Eingaben definiert, wurde jedoch nicht von allen Browsern implementiert und ist mittlerweile veraltet.

### usemap

Wenn `usemap` angegeben ist, muss es der Name eines Bildkarten-Elements sein, {{HTMLElement("map")}}, das eine Bildkarte definiert, die mit dem Bild verwendet werden soll. Diese Verwendung ist veraltet; Sie sollten zu der Verwendung des {{HTMLElement("img")}}-Elements wechseln, wenn Sie Bildkarten verwenden möchten.

## Verwendung von Image-Eingaben

Das `<input type="image">`-Element ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) (ein Element, dessen Inhalt nicht durch die CSS-Schicht erzeugt oder direkt verwaltet wird) und verhält sich ähnlich wie ein normales {{HTMLElement("img")}}-Element, jedoch mit den Fähigkeiten eines [Sende-Buttons](/de/docs/Web/HTML/Element/input/submit).

### Wesentliche Merkmale der Eingabe von Bildern

Schauen wir uns ein einfaches Beispiel an, das alle wesentlichen Funktionen enthält, die Sie verwenden müssten (diese funktionieren genauso wie bei dem `<img>`-Element):

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

- Das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut wird verwendet, um den Pfad zum anzuzeigenden Bild im Button zu spezifizieren.
- Das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut bietet einen Alternativtext für das Bild, damit Benutzer von Bildschirmlesegeräten besser verstehen, wofür der Button verwendet wird. Es wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht gezeigt werden kann (zum Beispiel, wenn der Pfad falsch geschrieben ist). Wenn möglich, verwenden Sie Text, der dem Label entspricht, das Sie verwenden würden, wenn Sie einen standardmäßigen Sende-Button verwenden würden.
- Die [`width`](/de/docs/Web/HTML/Element/input#width)- und [`height`](/de/docs/Web/HTML/Element/input#height)-Attribute werden verwendet, um die Breite und Höhe anzugeben, in der das Bild angezeigt werden soll, in Pixeln. Der Button hat die gleiche Größe wie das Bild. Wenn Sie die Trefferfläche des Buttons größer als das Bild machen müssen, müssen Sie CSS verwenden (z.B. {{cssxref("padding")}}). Wenn Sie nur eine Dimension angeben, wird die andere automatisch so angepasst, dass das Bild sein originales {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält.

### Standardverhalten von Formularen überschreiben

`<input type="image">`-Elemente — wie normale [Sende-Buttons](/de/docs/Web/HTML/Element/input/submit) — können eine Reihe von Attributen akzeptieren, die das Standardverhalten von Formularen überschreiben:

- `formaction`
  - : Die URI eines Programms, das die von dem Eingabeelement übermittelten Informationen verarbeitet; überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des Formularbesitzers des Elements.
- `formenctype`

  - : Gibt den Inhaltstyp an, der verwendet wird, um das Formular an den Server zu senden. Mögliche Werte sind:

    - `application/x-www-form-urlencoded`: Der Standardwert, wenn das Attribut nicht angegeben ist.
    - `text/plain`.

    Wenn dieses Attribut angegeben ist, überschreibt es das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des Formularbesitzers des Elements.

- `formmethod`

  - : Gibt die HTTP-Methode an, die der Browser zum Senden des Formulars verwendet. Mögliche Werte sind:

    - `post`: Die Daten des Formulars werden im Body des Formulars enthalten und an den Server gesendet.
    - `get`: Die Daten des Formulars werden an die **`form`**-Attribut-URI angehängt, mit einem '?' als Trennzeichen, und die resultierende URI wird an den Server gesendet. Verwenden Sie diese Methode, wenn das Formular keine Nebeneffekte hat und nur ASCII-Zeichen enthält.

    Wenn angegeben, überschreibt dieses Attribut das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des Formularbesitzers des Elements.

- `formnovalidate`
  - : Ein logisches Attribut, das angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Wenn dieses Attribut angegeben ist, überschreibt es das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des Formularbesitzers des Elements.
- `formtarget`

  - : Ein Name oder Stichwort, das angibt, wo die Antwort, die nach der Übermittlung des Formulars empfangen wird, angezeigt werden soll. Dies ist ein Name von oder ein Stichwort für einen _Browsing-Kontext_ (zum Beispiel, Tab, Fenster oder Inline-Frame). Wenn dieses Attribut angegeben ist, überschreibt es das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des Formularbesitzers des Elements. Die folgenden Stichwörter haben besondere Bedeutungen:

    - `_self`: Laden Sie die Antwort in denselben Browsing-Kontext wie den aktuellen. Dieser Wert ist der Standardwert, wenn das Attribut nicht angegeben wird.
    - `_blank`: Laden Sie die Antwort in einen neuen, unbenannten Browsing-Kontext.
    - `_parent`: Laden Sie die Antwort in den übergeordneten Browsing-Kontext des aktuellen. Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.
    - `_top`: Laden Sie die Antwort in den obersten Browsing-Kontext (d.h. den Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen übergeordneten hat). Wenn es keinen übergeordneten gibt, verhält sich diese Option wie `_self`.

### Verwenden der x- und y-Datenpunkte

Wenn Sie ein Formular mit einem Button absenden, der mit `<input type="image">` erstellt wurde, werden zwei zusätzliche Datenpunkte automatisch vom Browser an den Server übermittelt — `x` und `y`. Sie können dies in unserem [Beispiel zu den X Y-Koordinaten](https://mdn.github.io/learning-area/html/forms/image-type-example/xy-coordinates-example.html) in Aktion sehen.

Wenn Sie auf das Bild klicken, um das Formular abzusenden, sehen Sie die Daten als Parameter an die URL angehängt, zum Beispiel `?x=52&y=55`. Wenn die Bildeingabe ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut hat, dann beachten Sie, dass der angegebene Name jedem Attribut vorangestellt wird, sodass bei `name`= `position` die zurückgegebenen Koordinaten in der URL als `?position.x=52&position.y=55` formatiert würden. Dies gilt natürlich auch für alle anderen Attribute.

Dies sind die X- und Y-Koordinaten des Bildes, auf das die Maus geklickt hat, um das Formular abzusenden, wobei (0,0) oben links im Bild liegt und der Standardfall ist, falls die Übermittlung ohne einen Klick auf das Bild erfolgt. Diese können verwendet werden, wenn die Position, auf die auf dem Bild geklickt wurde, von Bedeutung ist. Zum Beispiel könnten Sie eine Karte haben, die, wenn darauf geklickt wird, die angeklickten Koordinaten an den Server sendet. Der serverseitige Code ermittelt dann, welcher Ort angeklickt wurde, und gibt Informationen über nahegelegene Orte zurück.

In unserem obigen Beispiel könnten wir serverseitigen Code schreiben, der ermittelt, auf welche Farbe durch die übermittelten Koordinaten geklickt wurde, und eine Statistik der Lieblingsfarben der Nutzer führt.

### Anpassen der Bildposition und des Skalierungsalgorithmus

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um die Positionierung des Bildes innerhalb des `<input>`-Elementrahmens anzupassen, und die {{cssxref("object-fit")}}-Eigenschaft, um zu steuern, wie die Bildgröße angepasst wird, um innerhalb des Rahmens zu passen. Dies ermöglicht es Ihnen, mithilfe der `width`- und `height`-Attribute Platz im Layout für das Bild zu reservieren und dann zu bestimmen, wo innerhalb dieses Bereichs das Bild positioniert wird und wie (oder ob) es skaliert wird, um diesen Raum zu füllen.

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

### Anpassung der Bildposition und Skalierung

In diesem Beispiel passen wir das vorherige Beispiel an, um mehr Platz für das Bild zu reservieren und dann die tatsächliche Größe und Position des Bildes mithilfe von {{cssxref("object-fit")}} und {{cssxref("object-position")}} anzupassen.

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

Hier ist `object-position` so konfiguriert, dass das Bild in der oberen rechten Ecke des Elements gezeichnet wird, während `object-fit` auf `contain` gesetzt ist, was angibt, dass das Bild in der größtmöglichen Größe innerhalb des Elements gezeichnet werden soll, ohne sein Seitenverhältnis zu verändern. Beachten Sie den sichtbaren grauen Hintergrund des Elements, der in dem Bereich noch sichtbar ist, der nicht vom Bild bedeckt wird.

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
- Das HTML-{{HTMLElement("img")}}-Element
- Positionierung und Größenanpassung des Bildes innerhalb des `<input>`-Elementrahmens: {{cssxref("object-position")}} und {{cssxref("object-fit")}}
