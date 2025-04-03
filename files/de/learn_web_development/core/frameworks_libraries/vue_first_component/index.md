---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen, indem wir eine Komponente erstellen, die jedes Element in der To-Do-Liste darstellt. Dabei lernen wir einige wichtige Konzepte kennen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an diese über Props und das Speichern von Datenzuständen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version besuchen Sie <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Grundelementen der <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen, sowie Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und um einige der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Render-Funktionen) zu verwenden, benötigen Sie ein Terminal mit installiertem
          <a
            href="https://nodejs.org/en/download"
            rel="noopener noreferrer"
            target="_blank"
            >Node</a>
          und
          <a
            href="https://www.npmjs.com/get-npm"
            rel="noopener noreferrer"
            target="_blank"
            >npm</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Vue-Komponente erstellt, sie innerhalb einer anderen Komponente rendert, Daten mithilfe von Props überträgt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes To-Do-Element anzeigt. Wir werden dies verwenden, um unsere Liste von Aufgaben aufzubauen.

1. Erstellen Sie in Ihrem Verzeichnis `moz-todo-vue/src/components` eine neue Datei namens `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Template-Abschnitt der Komponente, indem Sie `<template></template>` am Anfang der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>`-Abschnitt unterhalb Ihres Template-Abschnitts. Fügen Sie innerhalb der `<script>`-Tags ein Standard exportiertes Objekt `export default {}` hinzu, welches Ihr Komponentenobjekt ist.

Ihre Datei sollte jetzt so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Templates dürfen derzeit nur ein einzelnes Root-Element haben – ein Element muss alles innerhalb des Template-Abschnitts umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden ein [`<div>`](/de/docs/Web/HTML/Element/div) für dieses Root-Element.

1. Fügen Sie jetzt ein leeres `<div>` in Ihr Komponententemplate ein.
2. Fügen Sie innerhalb dieses `<div>` ein Kontrollkästchen und ein entsprechendes Label hinzu. Fügen Sie dem Kontrollkästchen eine `id` hinzu und ein `for`-Attribut, das das Kontrollkästchen mit dem Label verknüpft, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwenden von TodoItem in unserer App

Das alles ist in Ordnung, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, sodass es keine Möglichkeit gibt, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns das jetzt hinzufügen.

1. Öffnen Sie erneut `App.vue`.
2. Fügen Sie oben in Ihrem `<script>`-Tag Folgendes hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie in Ihrem Komponentenobjekt die `components`-Eigenschaft hinzu und registrieren Sie darin Ihre `ToDoItem`-Komponente.

Ihr `<script>`-Inhalt sollte jetzt so aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist dieselbe Art und Weise, wie die `HelloWorld`-Komponente früher vom Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App darzustellen, müssen Sie in Ihr `<template>`-Element gehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponenten-Dateiname und seine Darstellung in JavaScript in PascalCase sind (z. B. `ToDoList`), und das entsprechende benutzerdefinierte Element ist im {{Glossary("kebab_case", "Kebab-Case")}} (z. B. `<to-do-list>`).
Es ist notwendig, diesen Stil beizubehalten, wenn Sie Vue-Templates [direkt im DOM](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Erstellen Sie unterhalb der [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements)-Überschrift eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Element/ul)), die ein einzelnes Listenelement ([`<li>`](/de/docs/Web/HTML/Element/li)) enthält.
2. Fügen Sie in das Listenelement `<to-do-item></to-do-item>` ein.

Der `<template>`-Abschnitt Ihrer `App.vue`-Datei sollte jetzt so aussehen:

```vue
<div id="app">
  <h1>To-Do List</h1>
  <ul>
    <li>
      <to-do-item></to-do-item>
    </li>
  </ul>
</div>
```

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie nun Ihr gerendertes `ToDoItem` sehen, bestehend aus einem Kontrollkästchen und einem Label.

![Der aktuelle Renderzustand der App, der einen Titel der To-Do-Liste und ein einzelnes Kontrollkästchen mit Label enthält](rendered-todoitem.png)

## Komponenten dynamisch mit Props gestalten

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, da wir sie nur einmal auf einer Seite einfügen können (IDs müssen eindeutig sein), und wir haben keine Möglichkeit, den Labeltext festzulegen. Nichts daran ist dynamisch.

Was wir brauchen, ist ein gewisser Komponentenstatus. Dies kann durch Hinzufügen von Props zu unserer Komponente erreicht werden. Sie können Props sich ähnlich wie Eingaben in einer Funktion vorstellen. Der Wert eines Props gibt Komponenten einen anfänglichen Status, der ihre Darstellung beeinflusst.

### Registrierung von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit besteht darin, Props einfach als ein Array von Strings aufzulisten. Jedes Element im Array entspricht dem Namen eines Props.
- Die zweite Möglichkeit besteht darin, Props als Objekt zu definieren, wobei jede Schlüssel einem Props-Namen entspricht. Das Auflisten von Props als Objekt erlaubt es Ihnen, Standardwerte anzugeben, Props als erforderlich zu markieren, einfaches Objekt-Typing (insbesondere bezüglich primitiver JavaScript-Typen) durchzuführen und einfache Prop-Validierung durchzuführen.

> [!NOTE]
> Die Prop-Validierung erfolgt nur im Entwicklungsmodus, daher können Sie sich in der Produktion nicht strikt darauf verlassen. Darüber hinaus werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente verwenden wir die Objektregistrierungsmethode.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue`-Datei.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des `export default {}`-Objekts hinzu, die ein leeres Objekt enthält.
3. Fügen Sie in diesem Objekt zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der `label`-Schlüsselwert sollte ein Objekt mit 2 Eigenschaften (oder **Props**, wie sie im Kontext der Verfügbarkeit für die Komponenten genannt werden) sein.

   1. Die erste ist eine `required`-Eigenschaft, die einen Wert von `true` hat. Dies zeigt Vue an, dass wir erwarten, dass jede Instanz dieser Komponente ein Labelfeld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Labelfeld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft als JavaScript `String`-Typ (beachten Sie das große "S"). Dies sagt Vue, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Nun zur `done`-Prop.

   1. Fügen Sie zuerst ein `default`-Feld mit einem Wert von `false` hinzu. Dies bedeutet, dass wenn kein `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, das `done`-Prop den Wert false hat (beachten Sie, dass dies nicht erforderlich ist – wir benötigen `default` nur für nicht erforderliche Props).
   2. Fügen Sie dann ein `type`-Feld mit einem Wert von `Boolean` hinzu. Dies sagt Vue, dass wir erwarten, dass das Wertprop ein JavaScript-Boolean-Typ ist.

Ihr Komponentenobjekt sollte jetzt so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwenden registrierter Props

Mit diesen im Komponentenobjekt definierten Props können wir diese Variablenwerte jetzt innerhalb unseres Templates verwenden. Beginnen wir damit, das `label`-Prop zum Komponententemplate hinzuzufügen.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements mit `\{{label}}`.

`\{{}}` ist eine spezielle Template-Syntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, innerhalb unseres Templates auszugeben, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass der Inhalt innerhalb von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall geben wir den Wert des `label`-Props aus.

Der Template-Abschnitt Ihrer Komponente sollte jetzt so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie werden sehen, dass das To-Do-Element wie zuvor gerendert wird, jedoch ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie werden in der Konsole eine Warnung sehen, die in etwa so lautet:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderlichen Prop markiert haben, wir der Komponente jedoch nie diesen Prop gegeben haben – wir haben definiert, wo wir es im Template verwenden möchten, aber wir haben es nicht an die Komponente übergeben, wenn wir sie aufgerufen haben. Lassen Sie uns das beheben.

Fügen Sie in Ihrer `App.vue`-Datei einen `label`-Prop zur `<to-do-item></to-do-item>`-Komponente hinzu, wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt werden Sie das Label in Ihrer App sehen, und die Warnung wird nicht mehr in der Konsole angezeigt.

Das sind also Props in Kurzfassung. Als Nächstes werden wir uns anschauen, wie Vue Datenzustände speichert.

## Vue's Datenobjekt

Wenn Sie den Wert des `label`-Props ändern, das in den `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente übergeben wird, sollten Sie sehen, wie er sich aktualisiert. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Wir tun jedoch derzeit nichts mit dem "done" Prop – wir können die Kontrollkästchen in der UI markieren, aber nirgends in der App zeichnen wir auf, ob ein To-Do-Element tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir den `done`-Prop an das `checked`-Attribut des [`<input>`](/de/docs/Web/HTML/Element/input)-Elements binden, sodass er als Aufzeichnung dienen kann, ob das Kontrollkästchen markiert ist oder nicht. Es ist jedoch wichtig, dass Props als unidirektionale Datenbindung fungieren – eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Es gibt viele Gründe dafür. Unter anderem können Komponenten, die Props bearbeiten, das Debuggen erschweren. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein, nachzuvollziehen, woher die Änderungen an diesem Wert stammen. Darüber hinaus kann das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. Wenn also ein Prop in einer Komponente mutiert wird, würde dies das Neurendern der Komponente auslösen, was die Mutation erneut auslösen könnte.

Um dieses Problem zu umgehen, können wir den `done`-Zustand mit Vues `data`-Eigenschaft verwalten. Die `data`-Eigenschaft ist der Ort, an dem Sie lokale Zustände in einer Komponente verwalten können. Sie lebt innerhalb des Komponentenobjekts zusammen mit der `props`-Eigenschaft und hat die folgende Struktur:

```js
data() {
  return {
    key: value
  }
}
```

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies dient dazu, die Datenwerte für jede Instanz einer Komponente zur Laufzeit einzigartig zu halten – die Funktion wird für jede Komponenteninstanz separat aufgerufen. Wenn Sie Daten lediglich als Objekt deklarierten, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist eine Nebenwirkung der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht wollen.

Sie verwenden `this`, um auf die Props und andere Eigenschaften einer Komponente von innerhalb der Daten zuzugreifen, wie Sie es erwarten würden. Wir werden bald ein Beispiel dafür sehen.

> [!NOTE]
> Wegen der Art und Weise, wie `this` in Pfeilfunktionen funktioniert (und an den Kontext des Elternteils gebunden wird), könnten Sie von innerhalb von `data` aus nicht auf die notwendigen Attribute zugreifen, wenn Sie eine Pfeilfunktion verwenden. Verwenden Sie daher keine Pfeilfunktion für die `data`-Eigenschaft.

Lassen Sie uns also eine `data`-Eigenschaft zu unserer `ToDoItem`-Komponente hinzufügen. Diese wird ein Objekt zurückgeben, das eine Eigenschaft namens `isDone` enthält, deren Wert `this.done` ist.

Aktualisieren Sie das Komponentenobjekt wie folgt:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
    };
  },
};
```

Vue macht hier ein wenig Magie – es bindet alle Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, was Sie bereits gesehen haben, und andere wie `methods`, `computed` usw.) direkt an die Instanz. Dies geschieht teilweise, um sie Ihrem Template zur Verfügung zu stellen. Der Nachteil hierbei ist, dass Sie die Schlüssel über diese Attribute hinweg eindeutig halten müssen. Aus diesem Grund haben wir unser Datenattribut `isDone` und nicht `done` genannt.

Jetzt müssen wir die `isDone`-Eigenschaft an unsere Komponente anhängen. In ähnlicher Weise, wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Templates anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und Komponenten zu binden: **`v-bind`**. Der `v-bind`-Ausdruck sieht folgendermaßen aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie setzen `v-bind:` vor das Attribut/den Prop, den/die Sie binden möchten. In den meisten Fällen können Sie eine Abkürzung für die `v-bind`-Eigenschaft verwenden, indem Sie einfach das Attribut/den Prop mit einem Doppelpunkt voranstellen. Also funktioniert `:attribute="expression"` genauso wie `v-bind:attribute="expression"`.

Im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft mit dem `checked`-Attribut des `<input>`-Elements zu verknüpfen. Beide der folgenden sind äquivalent:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können das Muster verwenden, das Ihnen lieber ist. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzsyntax häufiger verwendet wird, wird in diesem Tutorial an diesem Muster festgehalten.

Lassen Sie uns dies tun. Aktualisieren Sie jetzt Ihr `<input>`-Element, um `:checked="isDone"` einzuschließen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` zum `ToDoItem`-Aufruf in `App.vue` hinzufügen. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, da andernfalls `true` als String übergeben wird. Das angezeigte Kontrollkästchen sollte markiert sein.

```vue
<template>
  <div id="app">
    <h1>My To-Do List</h1>
    <ul>
      <li>
        <to-do-item label="My ToDo Item" :done="true"></to-do-item>
      </li>
    </ul>
  </div>
</template>
```

Versuchen Sie, `true` in `false` und dann wieder zurück zu ändern, und laden Sie Ihre App dazwischen neu, um zu sehen, wie sich der Zustand ändert.

## Einzigartige ID für Todos vergeben

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Zustand programmatisch festlegen können. Aber momentan können wir nur eine `ToDoList`-Komponente auf der Seite hinzufügen, da die `id` fest codiert ist. Dies würde bei unterstützender Technologie zu Fehlern führen, da die `id` benötigt wird, um Labels korrekt mit ihren Kontrollkästchen zuzuordnen. Um dies zu beheben, können wir die `id` im Komponentendatenprogrammatisch festlegen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um einen eindeutigen String zu generieren, um die Komponenten-`id`s eindeutig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine einfache Möglichkeit, Eindeutigkeit sicherzustellen, ohne auf externe Bibliotheken angewiesen zu sein.

Fügen Sie als nächstes ein `id`-Feld zur `data`-Eigenschaft wie unten gezeigt hinzu; dies verwendet `crypto.randomUUID()`, um einen eindeutigen String zurückzugeben, den wir dann mit `todo-` davor an Präfix versehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
      id: "todo-" + crypto.randomUUID(),
    };
  },
};
```

Binden Sie als Nächstes die `id` sowohl an das `id`-Attribut unseres Kontrollkästchens als auch an das `for`-Attribut des Labels, indem Sie die vorhandenen `id`- und `for`-Attribute wie folgt aktualisieren:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Damit ist dieser Artikel abgeschlossen. An diesem Punkt haben wir eine gut funktionierende `ToDoItem`-Komponente, die ein anzuzeigendes Label empfangen kann, ihren markierten Zustand speichert und mit einer einzigartige `id` gerendert wird, jedes Mal wenn sie aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend mehr `<to-do-item></to-do-item>`-Aufrufe in `App.vue` einfügen und dann deren gerenderten Ausgaben mit den DevTools Ihres Browsers überprüfen.

Jetzt sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. Im nächsten Artikel werden wir uns damit beschäftigen, wie man eine Reihe von To-Do-Elementdaten zu unserer `App.vue`-Komponente hinzufügt, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit dem `v-for`-Direktiv anzeigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
