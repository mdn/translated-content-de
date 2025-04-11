---
title: Erstellen unseres ersten Vue-Komponenten
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Nun ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen mit der Erstellung einer Komponente, die jedes Element in der To-Do-Liste repräsentiert. Dabei werden wir einige wichtige Konzepte kennenlernen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über `props` und das Speichern von Datenzuständen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie die fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue repository](https://github.com/mdn/todo-vue). Für eine Live-Version besuchen Sie <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          sowie Kenntnisse über das
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und die Verwendung einiger fortschrittlicher Funktionen von Vue (wie Single-File-Komponenten oder Renderfunktionen) benötigen Sie ein Terminal mit
          <a href="https://nodejs.org/en/download" rel="noopener noreferrer" target="_blank">Node</a>
          und
          <a href="https://www.npmjs.com/get-npm" rel="noopener noreferrer" target="_blank">npm</a>
          installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Vue-Komponente erstellt, sie in einer anderen Komponente rendert, Daten mittels `props` in sie übergibt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes To-Do-Element anzeigt. Wir werden dies verwenden, um unsere Liste von Aufgaben zu erstellen.

1. Erstellen Sie in Ihrem Verzeichnis `moz-todo-vue/src/components` eine neue Datei namens `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Vorlagenabschnitt der Komponente, indem Sie `<template></template>` oben in die Datei einfügen.
3. Erstellen Sie einen `<script></script>`-Abschnitt unterhalb Ihres Vorlagenabschnitts. Fügen Sie innerhalb der `<script>`-Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, das Ihr Komponentenobjekt ist.

Ihre Datei sollte jetzt so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Nun können wir beginnen, tatsächliche Inhalte zu unserem `ToDoItem` hinzuzufügen. Vue-Vorlagen dürfen derzeit nur ein einzelnes Root-Element haben — ein Element muss alles innerhalb des Vorlagenabschnitts umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden dafür ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) als Wurzelelement.

1. Fügen Sie jetzt ein leeres `<div>` innerhalb Ihrer Komponentenvorlage hinzu.
2. Lassen Sie uns in diesem `<div>` ein Kontrollkästchen und ein entsprechendes Label hinzufügen. Fügen Sie dem Kontrollkästchen eine `id` und dem Label ein `for`-Attribut hinzu, das das Kontrollkästchen wie unten gezeigt mit dem Label verknüpft.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwenden von TodoItem innerhalb unserer App

Das ist alles in Ordnung, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, sodass es keinen Weg gibt, sie zu testen und zu sehen, ob alles funktioniert. Fügen wir sie jetzt hinzu.

1. Öffnen Sie `App.vue` erneut.
2. Fügen Sie oben in Ihrem `<script>`-Tag Folgendes hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie in Ihrem Komponentenobjekt die Eigenschaft `components` hinzu und in dieser Eigenschaft fügen Sie Ihre `ToDoItem`-Komponente hinzu, um sie zu registrieren.

Ihre `<script>`-Inhalte sollten nun so aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist die gleiche Art und Weise, wie der `HelloWorld`-Komponente zuvor durch das Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>`-Element gehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponenten-Dateiname und seine Darstellung in JavaScript in PascalCase (z. B. `ToDoList`) ist, und das entsprechende benutzerdefinierte Element in {{Glossary("kebab_case", "Kebab-Case")}} (z. B. `<to-do-list>`).
Es ist notwendig, diesen Gehäusestil zu verwenden, wenn Sie Vue-Vorlagen [direkt im DOM schreiben](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats).

1. Erstellen Sie unterhalb des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) ein ungeordnetes Listenelement ([`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)), das ein einzelnes Listenelement ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)) enthält.
2. Fügen Sie innerhalb des Listenelements `<to-do-item></to-do-item>` hinzu.

Der `<template>`-Abschnitt Ihrer `App.vue`-Datei sollte jetzt ungefähr so aussehen:

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

![Der aktuelle Renderingzustand der App, die einen Titel der To-Do-Liste, und ein einzelnes Kontrollkästchen und Label enthält](rendered-todoitem.png)

## Komponenten dynamisch mit Props gestalten

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, da wir sie nur einmal auf einer Seite wirklich einfügen können (IDs müssen eindeutig sein) und wir keine Möglichkeit haben, den Labeltext festzulegen. Nichts davon ist dynamisch.

Was wir brauchen, ist ein gewisser Komponentenstatus. Dies kann erreicht werden, indem wir `props` zu unserer Komponente hinzufügen. Sie können `props` als Inputs in einer Funktion betrachten. Der Wert eines `props` gibt Komponenten einen Anfangszustand, der ihre Anzeige beeinflusst.

### Registrieren von Props

In Vue gibt es zwei Möglichkeiten, `props` zu registrieren:

- Der erste Weg besteht darin, `props` einfach als eine Liste von Zeichenfolgen in einem Array aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines `props`.
- Der zweite Weg besteht darin, `props` als ein Objekt zu definieren, wobei jeder Schlüssel dem `props`-Namen entspricht. Das Auflisten von `props` als Objekt ermöglicht es Ihnen, Standardwerte anzugeben, `props` als erforderlich zu markieren, eine grundlegende Objekt-Typisierung (speziell für JavaScript Primitive) durchzuführen und eine einfache `props`-Validierung durchzuführen.

> [!NOTE]
> Die Prop-Validierung erfolgt nur im Entwicklungsmodus, sodass Sie sich im Produktionsmodus nicht streng darauf verlassen können. Darüber hinaus werden Prop-Validierungsfunktionen vor der Erstellung der Komponenteninstanz aufgerufen, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere `props`) haben.

Für diese Komponente verwenden wir die Objektregistrierungsmethode.

1. Gehen Sie zurück zu Ihrer Datei `ToDoItem.vue`.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des `export default {}`-Objekts hinzu, das ein leeres Objekt enthält.
3. Fügen Sie in diesem Objekt zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der Wert des `label`-Schlüssels sollte ein Objekt mit 2 Eigenschaften sein (oder **props**, wie sie im Kontext des zur Verfügung stehenden für die Komponenten genannt werden).

   1. Die erste ist eine `required`-Eigenschaft, die den Wert `true` hat. Dies wird Vue mitteilen, dass wir von jeder Instanz dieser Komponente erwarten, dass sie ein Labelfeld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Labelfeld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft als JavaScript `String` Type (beachten Sie das große "S"). Dies sagt Vue, dass wir davon ausgehen, dass der Wert dieser Eigenschaft eine Zeichenfolge ist.

5. Nun zum `done` prop.

   1. Fügen Sie zunächst ein `default`-Feld mit einem Wert von `false` hinzu. Dies bedeutet, dass, wenn kein `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, das `done`-Prop den Wert false hat (beachten Sie, dass dies nicht erforderlich ist — wir benötigen `default` nur bei nicht erforderlichen `props`).
   2. Fügen Sie als nächstes ein `type`-Feld mit einem Wert von `Boolean` hinzu. Dies sagt Vue, dass wir erwarten, dass der Wert `props` ein JavaScript-boolean-Typ ist.

Ihr Komponentenobjekt sollte nun so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwenden der registrierten Props

Mit diesen in das Komponentenobjekt definierten `props` können wir diese Variablenwerte jetzt in unserer Vorlage verwenden. Fügen wir zunächst das `label` `props` zur Komponentenvorlage hinzu.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Vorlagensyntax in Vue, mit der wir das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, in unserer Vorlage ausgeben können, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass Inhalte innerhalb von `\{{}}` als Text und nicht als HTML angezeigt werden. In diesem Fall geben wir den Wert des `label` `props` aus.

Der Vorlagenabschnitt Ihrer Komponente sollte nun so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie werden sehen, dass das To-Do-Element wie zuvor gerendert wird, jedoch ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie werden eine Warnung dieser Art in der Konsole sehen:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderliches `props` markiert haben, aber wir haben der Komponente dieses `props` nie gegeben — wir haben definiert, wo es in der Vorlage verwendet werden soll, aber wir haben es nicht in die Komponente übergeben, wenn wir sie aufrufen. Lassen Sie uns das beheben.

Fügen Sie in Ihrer Datei `App.vue` ein `label` `props` zur `<to-do-item></to-do-item>`-Komponente hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt werden Sie das Label in Ihrer App sehen und die Warnung wird nicht wieder in der Konsole ausgegeben.

Das sind also `props` in wenigen Worten. Als nächstes gehen wir darauf ein, wie Vue den Datenstatus erhält.

## Vue-Objekt `data`

Wenn Sie den Wert der `label` `props`, die in den `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente übergeben werden, ändern, sollten Sie sehen, dass es sich aktualisiert. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Wir machen jedoch derzeit nichts mit dem "done" prop — wir können die Kontrollkästchen in der UI abhaken, aber nirgendwo in der App zeichnen wir auf, ob ein To-Do-Element tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir das `done`-Prop mit dem `checked`-Attribut auf dem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element binden, damit es als Protokoll dafür dienen kann, ob das Kontrollkästchen aktiviert oder nicht. Es ist jedoch wichtig, dass `props` als Einweg-Datenbindung fungieren — eine Komponente sollte den Wert ihrer eigenen `props` niemals ändern. Es gibt viele Gründe dafür. Zum Teil können Komponenten, die `props` bearbeiten, das Debuggen zu einer Herausforderung machen. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein, zu verfolgen, woher die Änderungen an diesem Wert kommen. Außerdem kann das Ändern von `props` dazu führen, dass Komponenten neu gerendert werden. Das Ändern von `props` in einer Komponente würde also das Neurendern der Komponente auslösen, was wiederum die Mutation auslösen könnte.

Um dies zu umgehen, können wir den `done`-Zustand mit der `data`-Eigenschaft von Vue verwalten. Die `data`-Eigenschaft ist, wo Sie den lokalen Status in einer Komponente verwalten können, sie liegt innerhalb des Komponentenobjekts neben der `props`-Eigenschaft und hat die folgende Struktur:

```js
export default {
  // …
  data() {
    return {
      key: value,
    };
  },
  // …
};
```

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies geschieht, um die Datenwerte für jede Instanz einer Komponente zur Laufzeit einzigartig zu halten — die Funktion wird separat für jede Komponenteninstanz aufgerufen. Wenn Sie Daten nur als Objekt deklariert hätten, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht wollen.

Sie verwenden `this`, um von innerhalb der Daten auf die `props` und andere Attribute einer Komponente zuzugreifen, wie Sie es erwarten könnten. Wir werden dies in einem Moment sehen.

> [!NOTE]
> Aufgrund der Funktionsweise von `this` in Pfeilfunktionen (Bindung an den Kontext des übergeordneten Elements), könnten Sie von innerhalb von `data` auf keine der erforderlichen Attribute zugreifen, wenn Sie eine Pfeilfunktion verwenden. Verwenden Sie daher keine Pfeilfunktion für die `data`-Eigenschaft.

Fügen wir also unserer `ToDoItem`-Komponente eine `data`-Eigenschaft hinzu. Diese wird ein Objekt mit einer einzigen Eigenschaft zurückgeben, die wir `isDone` nennen, deren Wert `this.done` ist.

Aktualisieren Sie das Komponentenobjekt so:

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

Vue macht hier ein bisschen Magie — es bindet alle Ihre `props` direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, die Sie bereits gesehen haben, und andere wie `methods`, `computed`, etc.) direkt an die Instanz. Dies geschieht teilweise, um sie für Ihre Vorlage verfügbar zu machen. Der Nachteil dabei ist, dass Sie die Schlüssel über diese Attribute hinweg eindeutig halten müssen. Deshalb haben wir unser `data`-Attribut `isDone` anstelle von `done` genannt.

Jetzt müssen wir die `isDone`-Eigenschaft an unsere Komponente anhängen. In ähnlicher Weise wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Vorlagen anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke mit HTML-Elementen und Komponenten zu verknüpfen: **`v-bind`**. Der `v-bind`-Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie präfixieren das Attribut/prop, das Sie binden möchten, mit `v-bind:`. In den meisten Fällen können Sie eine Abkürzung für die `v-bind`-Eigenschaft verwenden, indem Sie das Attribut/prop einfach mit einem Doppelpunkt präfixieren. So funktioniert `:attribut="expression"` genauso wie `v-bind:attribut="expression"`.

Im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft mit dem `checked`-Attribut auf dem `<input>`-Element zu verknüpfen. Beide folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie sind frei, das Muster zu verwenden, das Ihnen besser gefällt. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzsyntax häufiger verwendet wird, wird dieses Tutorial diesem Muster folgen.

Also lasst es uns tun. Aktualisieren Sie Ihr `<input>`-Element jetzt, um `:checked="isDone"` einzuschließen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` an den `ToDoItem`-Aufruf in `App.vue` übergeben. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, da sonst `true` als Zeichenfolge übergeben wird. Das angezeigte Kontrollkästchen sollte aktiviert sein.

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

Versuchen Sie, `true` in `false` zu ändern und umgekehrt, laden Sie Ihre App jeweils dazwischen neu, um zu sehen, wie sich der Zustand ändert.

## Todo-Elementen eine eindeutige ID zuweisen

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Zustand programmatisch festlegen können. Wir können jedoch derzeit nur eine `ToDoList`-Komponente zur Seite hinzufügen, da die `id` fest kodiert ist. Dies würde zu Fehlern mit unterstützender Technologie führen, da die `id` benötigt wird, um die Labels korrekt mit ihren Kontrollkästchen zu verbinden. Um dies zu beheben, können wir die `id` programmgesteuert in den Komponentendaten festlegen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um eine eindeutige Zeichenfolge zu generieren, um die Komponenten-`id`s einzigartig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine einfache Möglichkeit, die Einzigartigkeit zu gewährleisten, ohne auf externe Bibliotheken angewiesen zu sein.

Fügen Sie als nächstes ein `id`-Feld zur `data`-Eigenschaft hinzu, wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenfolge zurückzugeben, die wir dann mit `todo-` voranstellen:

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

Binden Sie anschließend die `id` sowohl an das `id`-Attribut unseres Kontrollkästchens als auch an das `for`-Attribut des Labels, indem Sie die vorhandenen `id`- und `for`-Attribute wie folgt aktualisieren:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Das war's für diesen Artikel. An diesem Punkt haben wir eine gut funktionierende `ToDoItem`-Komponente, die ein anzuzeigendes Label verwenden kann, ihren überprüften Status speichert und mit einer eindeutigen `id` jedes Mal gerendert wird, wenn sie aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend weitere `<to-do-item></to-do-item>`-Aufrufe in `App.vue` hinzufügen und dann ihre gerenderte Ausgabe mit den DevTools Ihres Browsers überprüfen.

Nun sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. Im nächsten Artikel werden wir darauf eingehen, wie wir einen Satz von Todo-Elementdaten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchschleifen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
