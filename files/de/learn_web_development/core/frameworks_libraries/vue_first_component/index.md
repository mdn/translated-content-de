---
title: Erstellen unseres ersten Vue-Komponenten
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir beginnen mit der Erstellung einer Komponente, um jedes Element in der To-Do-Liste darzustellen. Unterwegs lernen wir einige wichtige Konzepte kennen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an diese über Props und das Speichern von Datenzuständen.

> [!NOTE]
> Falls Sie Ihren Code mit unserer Version überprüfen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Eine Live-Version finden Sie unter <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnis des
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminals/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die
          die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die
          die zugrunde liegende DOM-Struktur abbildet. Für die Installation und die Nutzung einige der
          fortgeschritteneren Funktionen von Vue (wie Single File Components oder Render-Funktionen), brauchen Sie ein Terminal mit
          <a
            href="https://nodejs.org/en/download/package-manager"
            rel="noopener noreferrer"
            target="_blank"
            >Node</a
          >
          und
          <a
            href="https://www.npmjs.com/get-npm"
            rel="noopener noreferrer"
            target="_blank"
            >npm</a
          >
          installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie man eine Vue-Komponente erstellt, sie innerhalb einer anderen Komponente rendert, Daten mit Props an sie übergibt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes To-Do-Element anzeigen wird. Wir werden dies nutzen, um unsere Liste von To-Dos aufzubauen.

1. Erstellen Sie in Ihrem `moz-todo-vue/src/components` Verzeichnis eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Template-Abschnitt der Komponente, indem Sie `<template></template>` an den Anfang der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>` Abschnitt unter Ihrem Template-Abschnitt. Fügen Sie innerhalb der `<script>` Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, welches Ihr Komponentenobjekt ist.

Ihre Datei sollte nun so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Templates dürfen derzeit nur ein einziges Root-Element haben — ein Element muss alles innerhalb des Template-Abschnitts umschließen (dies wird sich mit Vue 3 ändern). Wir werden dazu ein [`<div>`](/de/docs/Web/HTML/Element/div) verwenden.

1. Fügen Sie nun ein leeres `<div>` in Ihr Komponenten-Template ein.
2. Fügen Sie innerhalb dieses `<div>` eine Checkbox und ein entsprechendes Label hinzu. Fügen Sie der Checkbox eine `id` hinzu und ein `for` Attribut, um die Checkbox mit dem Label zu verknüpfen, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwendung von TodoItem in unserer App

Das ist alles in Ordnung, aber wir haben die Komponente noch nicht in unsere App eingefügt, so gibt es keine Möglichkeit, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns das jetzt hinzufügen.

1. Öffnen Sie `App.vue` erneut.
2. Fügen Sie am Anfang Ihres `<script>` Tags das Folgende hinzu, um Ihre `ToDoItem` Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie innerhalb Ihres Komponentenobjekts die Eigenschaft `components` hinzu, und innerhalb dieser fügen Sie Ihre `ToDoItem` Komponente hinzu, um sie zu registrieren.

Der Inhalt Ihres `<script>` Abschnitts sollte nun so aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist dieselbe Methode, wie die `HelloWorld` Komponente zuvor durch die Vue-CLI registriert wurde.

Um die `ToDoItem` Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>` Element hinaufgehen und sie als `<to-do-item></to-do-item>` Element aufrufen. Beachten Sie, dass der Dateiname der Komponente und seine Repräsentation in JavaScript in PascalCase (z.B. `ToDoList`) ist, und das entsprechende benutzerdefinierte Element in {{Glossary("kebab_case", "kebab-case")}} (z.B. `<to-do-list>`) sein muss.
Es ist erforderlich, diesen Stil zu verwenden, wenn Sie Vue-Templates [direkt im DOM] (https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Erstellen Sie unterhalb des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) ein unsortiertes Liste ([`<ul>`](/de/docs/Web/HTML/Element/ul)), das einen einzigen Listeneintrag ([`<li>`](/de/docs/Web/HTML/Element/li)) enthält.
2. Fügen Sie innerhalb des Listeneintrags `<to-do-item></to-do-item>` hinzu.

Der `<template>` Abschnitt Ihrer `App.vue` Datei sollte nun so aussehen:

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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie nun Ihre gerenderte `ToDoItem` sehen, bestehend aus einer Checkbox und einem Label.

![Der aktuelle Renderzustand der App, der einen Titel der To-Do-Liste und eine einzelne Checkbox und ein Label enthält](rendered-todoitem.png)

## Komponenten mit Props dynamisch machen

Unsere `ToDoItem` Komponente ist noch nicht sehr nützlich, weil wir sie wirklich nur einmal auf einer Seite einfügen können (IDs müssen eindeutig sein), und wir haben keine Möglichkeit, den Text des Labels festzulegen. Nichts davon ist dynamisch.

Was wir brauchen, ist etwas Komponentenstatus. Dies kann erreicht werden, indem wir unserer Komponente Props hinzufügen. Man kann sich Props als ähnlich zu Eingaben in einer Funktion vorstellen. Der Wert eines Props gibt Komponenten einen Anfangszustand, der ihre Anzeige beeinflusst.

### Registrieren von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Methode besteht darin, Props einfach als ein Array von Strings aufzuführen. Jeder Eintrag im Array entspricht dem Namen eines Props.
- Die zweite Methode ist, Props als ein Objekt zu definieren, wobei jeder Schlüssel dem Namen des Props entspricht. Das Auflisten von Props als Objekt erlaubt es Ihnen, Standardwerte anzugeben, Props als erforderlich zu kennzeichnen, grundlegendes Objekt-Typing durchzuführen (insbesondere bei JavaScript-Primitivtypen), und einfache Prop-Validierung durchzuführen.

> [!NOTE]
> Prop-Validierung erfolgt nur im Entwicklungsmodus, daher können Sie sich in der Produktion nicht strikt darauf verlassen. Darüber hinaus werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, so dass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente verwenden wir die Objektregistrierungsmethode.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue` Datei.
2. Fügen Sie eine `props` Eigenschaft innerhalb des Export `default {}` Objekts hinzu, das ein leeres Objekt enthält.
3. Fügen Sie diesem Objekt zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der `label` Schlüsselwert sollte ein Objekt mit 2 Eigenschaften (oder **Props**, wie es im Kontext des Zugangs zu den Komponenten genannt wird) sein.

   1. Die erste ist eine `required` (erforderlich) Eigenschaft, die den Wert `true` hat. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein Label-Feld hat. Vue warnt uns, wenn eine `ToDoItem`-Komponente kein Label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen werden, ist eine `type` (Typ-)Eigenschaft. Setzen Sie den Wert für diese Eigenschaft auf den JavaScript `String` Typ (beachten Sie das große "S"). Dies teilt Vue mit, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Nun zum `done` Prop.

   1. Fügen Sie zunächst ein `default` Feld hinzu, mit einem Wert von `false`. Dies bedeutet, dass wenn kein `done` Prop in eine `ToDoItem` Komponente übergeben wird, das `done` Prop den Wert false hat (denken Sie daran, dass dies nicht erforderlich ist — wir brauchen nur `default` bei nicht erforderlichen Props).
   2. Fügen Sie als nächstes ein `type` Feld mit einem Wert von `Boolean` hinzu. Dies teilt Vue mit, dass wir erwarten, dass der Wert dieses Props ein JavaScript-Boolean-Typ ist.

Ihr Komponentenobjekt sollte nun so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwenden von registrierten Props

Nachdem wir diese Props im Komponentenobjekt definiert haben, können wir diese Variablenwerte in unserem Template verwenden. Beginnen wir damit, das `label` Prop zum Komponententemplate hinzuzufügen.

Setzen Sie in Ihrem `<template>` den Inhalt des `<label>` Elements durch `\{{label}}` ein.

`\{{}}` ist eine spezielle Vorlagensyntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, in unserem Template auszugeben, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass Inhalte innerhalb von `\{{}}` als Text und nicht als HTML angezeigt werden. In diesem Fall geben wir den Wert des `label` Props aus.

Der Template-Bereich Ihrer Komponente sollte nun wie folgt aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und sehen Sie sich das Todo-Element an, das wie zuvor gerendert wird, jedoch ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie sehen eine Warnung, die ungefähr so lautet, in der Konsole:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies geschieht, weil wir das `label` als ein erforderliches Prop markierten, aber wir gaben der Komponente nie dieses Prop — wir haben definiert, wo im Template wir es verwenden wollen, aber wir haben es nicht in die Komponente übergeben, wenn wir sie aufriefen. Lassen Sie uns das beheben.

Fügen Sie in Ihrer `App.vue` Datei ein `label` Prop zur `<to-do-item></to-do-item>` Komponente hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt werden Sie das Label in Ihrer App sehen, und die Warnung wird in der Konsole nicht mehr ausgegeben.

Das war also eine kurze Einführung in Props. Als Nächstes gehen wir darauf ein, wie Vue den Datenstatus beibehält.

## Vue's Datenobjekt

Wenn Sie den Wert des `label` Props ändern, der in den `<to-do-item></to-do-item>` Aufruf Ihrer `App` Komponente übergeben wird, sollten Sie sehen, dass er sich aktualisiert. Das ist großartig. Wir haben eine Checkbox mit einem aktualisierbaren Label. Allerdings machen wir derzeit nichts mit dem "done" Prop — wir können die Checkboxes in der Benutzeroberfläche überprüfen, aber nirgendwo in der App wird aufgezeichnet, ob ein To-Do-Element tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir das `done` Prop der Komponente an das `checked` Attribut auf dem [`<input>`](/de/docs/Web/HTML/Element/input) Element binden, sodass es als Aufzeichnung dienen kann, ob die Checkbox aktiviert ist oder nicht. Es ist jedoch wichtig, dass Props als Einweg-Datenbindung dienen — eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Dafür gibt es viele Gründe. Einerseits können sich Komponenten, die Props bearbeiten, als Herausforderung beim Debuggen erweisen. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein, nachzuverfolgen, woher die Änderungen dieses Wertes kommen. Außerdem kann das Ändern von Props dazu führen, dass die Komponenten neu gerendert werden. Wenn also eine Komponente ihre Props mutiert, würde dies die Komponente dazu veranlassen, neu zu rendern, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done` Zustand mit der `data` Eigenschaft von Vue verwalten. Die `data` Eigenschaft ist, wo Sie lokalen Zustand in einer Komponente verwalten können, es lebt innerhalb des Komponentenobjekts neben der `props` Eigenschaft und hat die folgende Struktur:

```js
data() {
  return {
    key: value
  }
}
```

Sie werden feststellen, dass die `data` Eigenschaft eine Funktion ist. Dies geschieht, um die Datenwerte für jede Instanz einer Komponente zur Laufzeit eindeutig zu halten — die Funktion wird für jede Komponenteninstanz separat aufgerufen. Wenn Sie Daten einfach als Objekt deklarieren würden, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht wollen.

Sie nutzen `this`, um auf die Props und andere Eigenschaften einer Komponente von innerhalb des Datenbereichs zuzugreifen, wie Sie vielleicht erwarten würden. Wir werden dies gleich mit einem Beispiel sehen.

> [!NOTE]
> Aufgrund der Art und Weise, wie `this` in Pfeilfunktionen (arrow functions) funktioniert (Bindung an den Kontext des Elternteils), könnten Sie nicht auf die notwendigen Attribute von innerhalb der `data` zugreifen, wenn Sie eine Pfeilfunktion benutzen. Verwenden Sie also keine Pfeilfunktion für die `data` Eigenschaft.

Lassen Sie uns also eine `data` Eigenschaft zu unserer `ToDoItem` Komponente hinzufügen. Diese wird ein Objekt zurückgeben, das eine einzige Eigenschaft enthält, die wir `isDone` nennen, deren Wert `this.done` ist.

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

Vue macht hier ein bisschen Magie — es bindet alle Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, die Sie bereits gesehen haben, und andere wie `methods`, `computed`, etc.) direkt an die Instanz. Dies geschieht teilweise, um sie Ihrem Template zur Verfügung zu stellen. Der Nachteil ist, dass Sie die Schlüssel über diese Attribute hinweg eindeutig halten müssen. Dies ist der Grund, warum wir unser `data` Attribut `isDone` statt `done` genannt haben.

Nun müssen wir die `isDone` Eigenschaft an unsere Komponente anhängen. In ähnlicher Weise, wie es Vue ermöglicht, `\{{}}` Ausdrücke zu verwenden, um JavaScript-Ausdrücke innerhalb von Templates anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und Komponenten zu binden: **`v-bind`**. Der `v-bind` Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie setzen ein Präfix auf das Attribut/Prop, das Sie binden möchten, mit `v-bind:`. In den meisten Fällen können Sie eine Kurzform für die `v-bind` Eigenschaft verwenden, indem Sie einfach ein Doppelpunkt als Präfix für das Attribut/Prop setzen. Daher funktioniert `:attribute="expression"` genauso wie `v-bind:attribute="expression"`.

Im Fall der Checkbox in unserer `ToDoItem` Komponente können wir `v-bind` verwenden, um die `isDone` Eigenschaft mit dem `checked` Attribut auf dem `<input>` Element zu verknüpfen. Beide der folgenden Beispiele sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können sich frei entscheiden, welche Methode Sie verwenden möchten. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzform häufiger verwendet wird, bleibt dieses Tutorial diesem Muster treu.

Also, lassen Sie uns dies tun. Aktualisieren Sie Ihr `<input>` Element jetzt, um `:checked="isDone"` aufzunehmen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` zum `ToDoItem` Aufruf in `App.vue` hinzufügen. Beachten Sie, dass Sie die `v-bind` Syntax verwenden müssen, da ansonsten `true` als String übergeben wird. Die angezeigte Checkbox sollte aktiviert sein.

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

Versuchen Sie, `true` auf `false` zu ändern und wieder zurück, und laden Sie Ihre App zwischendurch neu, um zu sehen, wie sich der Zustand ändert.

## Todos eine eindeutige ID geben

Super! Wir haben jetzt eine funktionierende Checkbox, bei der wir den Zustand programmgesteuert festlegen können. Derzeit können wir jedoch nur eine `ToDoList` Komponente auf die Seite hinzufügen, da die `id` festgecodet ist. Dies würde bei Hilfstechnologien zu Fehlern führen, da die `id` benötigt wird, um Labels korrekt mit ihren Checkboxen zu verbinden. Um dies zu beheben, können wir die `id` programmgesteuert in den Komponentendaten setzen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um einen eindeutigen String zu generieren und damit die `id`s der Komponenten eindeutig zu halten. `randomUUID()` ist in modernen Browsern integriert und bietet eine einfache Möglichkeit, die Einzigartigkeit zu gewährleisten, ohne auf externe Bibliotheken zurückzugreifen.

Fügen Sie als nächstes ein `id` Feld zur `data` Eigenschaft hinzu, wie unten gezeigt; hierbei wird `crypto.randomUUID()` verwendet, um einen eindeutigen String zurückzugeben, dem wir dann `todo-` als Präfix hinzufügen:

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

Als nächstes binden Sie die `id` sowohl an das `id` Attribut der Checkbox als auch an das `for` Attribut des Labels, und aktualisieren Sie die vorhandenen `id` und `for` Attribute, wie gezeigt:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Das war's für diesen Artikel. An diesem Punkt haben wir eine gut funktionierende `ToDoItem` Komponente, die ein Label zur Anzeige übergeben bekommt, ihren überprüften Zustand speichert und jedes Mal mit einer eindeutigen `id` gerendert wird, wenn sie aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend mehr `<to-do-item></to-do-item>` Aufrufe in `App.vue` hinzufügen und dann deren gerenderten Output mit den DevTools Ihres Browsers überprüfen.

Jetzt sind wir bereit, mehrere `ToDoItem` Komponenten zu unserer App hinzuzufügen. Im nächsten Artikel schauen wir uns an, wie man eine Menge von To-Do-Elementdaten zu unserer `App.vue` Komponente hinzufügt, die wir dann durchlaufen und innerhalb von `ToDoItem` Komponenten mit der `v-for` Direktive anzeigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
