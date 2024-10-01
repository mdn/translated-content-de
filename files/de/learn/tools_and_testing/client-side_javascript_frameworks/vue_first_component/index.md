---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
l10n:
  sourceCommit: 7347dcddbde0fde17a8337bd5be0fd35996060e5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir beginnen damit, eine Komponente zu erstellen, die jedes Element in der Aufgabenliste darstellt. Dabei lernen wir einige wichtige Konzepte kennen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten über Props und das Speichern des Datenzustands.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispielcodes der Vue-App in unserem [todo-vue repository](https://github.com/mdn/todo-vue). Für eine live laufende Version siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Command Line</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und zur Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit
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
        Lernen, wie man eine Vue-Komponente erstellt, diese innerhalb einer anderen Komponente rendert, Daten über Props überträgt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes To-Do-Element anzeigt. Wir werden dies verwenden, um unsere Liste von Aufgaben zu erstellen.

1. Erstellen Sie im Verzeichnis `moz-todo-vue/src/components` eine neue Datei namens `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie die Komponentenvorlage, indem Sie `<template></template>` an den Anfang der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>` Abschnitt unter Ihrer Template-Sektion. Fügen Sie innerhalb der `<script>`-Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, das Ihr Komponentenobjekt ist.

Ihre Datei sollte jetzt so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Vorlagen sind derzeit auf ein einzelnes Wurzelelement beschränkt — ein Element muss alles innerhalb des Vorlagenabschnitts umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden ein [`<div>`](/de/docs/Web/HTML/Element/div) für dieses Wurzelelement.

1. Fügen Sie jetzt ein leeres `<div>` in Ihre Komponentenvorlage ein.
2. Fügen Sie in diesem `<div>` ein Kontrollkästchen und ein entsprechendes Label hinzu. Geben Sie dem Kontrollkästchen eine `id` und ein `for`-Attribut, um das Kontrollkästchen mit dem Label zu verbinden, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwendung von TodoItem in unserer App

Das ist alles schön und gut, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, daher gibt es keine Möglichkeit, sie zu testen und zu überprüfen, ob alles funktioniert. Lassen Sie es uns jetzt hinzufügen.

1. Öffnen Sie `App.vue` erneut.
2. Fügen Sie am Anfang Ihres `<script>`-Tags Folgendes hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie innerhalb Ihres Komponentenobjekts die `components`-Eigenschaft hinzu und registrieren Sie darin Ihre `ToDoItem`-Komponente.

Ihr `<script>`-Inhalt sollte nun so aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist die gleiche Methode, mit der die `HelloWorld`-Komponente früher vom Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>`-Element gehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Dateiname der Komponente und ihre Darstellung in JavaScript im PascalCase geschrieben sind (z.B. `ToDoList`) und das entsprechende benutzerdefinierte Element in {{Glossary("kebab_case", "kebab-case")}} (z.B. `<to-do-list>`).
Es ist notwendig, diese Schreibweise zu verwenden, wenn Sie Vue-Vorlagen [direkt im DOM](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Erstellen Sie unterhalb der [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) ein ungeordnetes Listelement ([`<ul>`](/de/docs/Web/HTML/Element/ul)) mit einem einzigen Listenpunkt ([`<li>`](/de/docs/Web/HTML/Element/li)).
2. Fügen Sie innerhalb des Listenpunkts `<to-do-item></to-do-item>` hinzu.

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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie nun Ihr gerendertes `ToDoItem` sehen, das aus einem Kontrollkästchen und einem Label besteht.

![Der aktuelle Renderzustand der App, der einen Titel der Aufgabenliste enthält und ein einziges Kontrollkästchen und ein Label](rendered-todoitem.png)

## Komponenten mit Props dynamisch machen

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, da wir sie nur einmal auf einer Seite einfügen können (IDs müssen eindeutig sein), und wir haben keine Möglichkeit, den Label-Text festzulegen. Nichts daran ist dynamisch.

Was wir brauchen, ist ein gewisser Komponentenstatus. Dies kann erreicht werden, indem wir der Komponente Props hinzufügen. Sie können Props als ähnlich zu Eingaben in einer Funktion betrachten. Der Wert eines Props gibt den Komponenten einen anfänglichen Zustand, der ihre Darstellung beeinflusst.

### Registrierung von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Methode besteht darin, Props einfach als Array von Strings aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines Props.
- Die zweite Methode besteht darin, Props als Objekt zu definieren, wobei jeder Schlüssel dem Prop-Namen entspricht. Das Auflisten von Props als Objekt ermöglicht es Ihnen, Standardwerte festzulegen, Props als erforderlich zu markieren, grundlegendes Objekttyping durchzuführen (speziell in Bezug auf JavaScript-Primitive) und eine einfache Prop-Validierung durchzuführen.

> [!NOTE]
> Prop-Validierung erfolgt nur im Entwicklungsmodus, sodass Sie nicht streng in der Produktion darauf vertrauen können. Außerdem werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente verwenden wir die Objekt-Registrierungsmethode.

1. Gehen Sie zurück zu Ihrer Datei `ToDoItem.vue`.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des `default {}`-Exports hinzu, die ein leeres Objekt enthält.
3. Fügen Sie diesem Objekt zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der Wert des `label`-Schlüssels sollte ein Objekt mit 2 Eigenschaften sein (oder **Props**, wie sie im Kontext der Verfügbarkeit für die Komponenten genannt werden).

   1. Die erste ist eine `required`-Eigenschaft, die den Wert `true` hat. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein Label-Feld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen werden, ist eine `type`-Eigenschaft. Setzen Sie den Wert dieser Eigenschaft auf den JavaScript-Typ `String` (beachten Sie das große "S"). Dies sagt Vue, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Nun zum Prop `done`.

   1. Fügen Sie zunächst ein `default`-Feld mit dem Wert `false` hinzu. Dies bedeutet, dass wenn kein `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, das `done`-Prop den Wert false hat (beachten Sie, dass dies nicht erforderlich ist - wir benötigen `default` nur für nicht erforderliche Props).
   2. Fügen Sie als nächstes ein `type`-Feld mit dem Wert `Boolean` hinzu. Dies sagt Vue, dass wir erwarten, dass das Wert-Prop ein JavaScript-Boolescher Typ ist.

Ihr Komponentenobjekt sollte nun so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwendung von registrierten Props

Mit diesen innerhalb des Komponentenobjekts definierten Props können wir nun diese Variablenwerte in unserer Vorlage verwenden. Lassen Sie uns beginnen, indem wir das `label`-Prop zur Komponentenvorlage hinzufügen.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Vorlagensyntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken zu drucken, die in unserer Klasse definiert sind, innerhalb unserer Vorlage, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass der Inhalt innerhalb von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall drucken wir den Wert des `label`-Props.

Der Vorlagenabschnitt Ihrer Komponente sollte nun so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Kehren Sie zu Ihrem Browser zurück und Sie sehen das gerenderte To-Do-Element wie zuvor, aber ohne Label (oh nein!). Gehen Sie zu den Entwicklertools Ihres Browsers und Sie sehen eine Warnung wie diese im Konsolenbereich:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderlich markiert haben, aber wir haben der Komponente diesen Prop nie gegeben - wir haben definiert, wo wir es innerhalb der Vorlage verwenden möchten, aber wir haben es beim Aufrufen nicht an die Komponente übergeben. Lassen Sie uns das beheben.

Fügen Sie Ihrer `App.vue`-Datei ein `label`-Prop zum `<to-do-item></to-do-item>`-Element hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt sehen Sie das Label in Ihrer App, und die Warnung wird nicht erneut in der Konsole ausgegeben.

Das sind also Props kurz zusammengefasst. Als nächstes werden wir darauf eingehen, wie Vue den Datenzustand beibehält.

## Vue's Data-Objekt

Wenn Sie den Wert des `label`-Props ändern, das an den `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente übergeben wird, sollten Sie sehen, dass es sich aktualisiert. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Allerdings machen wir derzeit nichts mit dem "done"-Prop — wir können die Kontrollkästchen in der Benutzeroberfläche markieren, aber nirgendwo in der App wird gespeichert, ob ein To-Do-Element tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir das `done`-Prop der Komponente an das `checked`-Attribut auf dem [`<input>`](/de/docs/Web/HTML/Element/input)-Element binden, so dass es als Aufzeichnung dienen kann, ob das Kontrollkästchen markiert ist oder nicht. Es ist jedoch wichtig, dass Props als Einweg-Datenbindung dienen — eine Komponente sollte nie den Wert ihrer eigenen Props ändern. Dafür gibt es viele Gründe. Zum Teil kann das Bearbeiten von Props von Komponenten das Debuggen erschweren. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein nachzuvollziehen, woher die Änderungen dieses Wertes kommen. Außerdem kann das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. Das Ändern von Props in einer Komponente würde also das erneute Rendern der Komponente auslösen, was wiederum die Änderung auslösen könnte.

Um dies zu umgehen, können wir den `done`-Status mit Vue's `data`-Eigenschaft verwalten. Die `data`-Eigenschaft ist der Ort, an dem Sie lokalen Zustand in einer Komponente verwalten können. Sie befindet sich neben der `props`-Eigenschaft im Komponentenobjekt und hat die folgende Struktur:

```js
data() {
  return {
    key: value
  }
}
```

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies geschieht, um die Datenwerte während der Laufzeit für jede Instanz einer Komponente einzigartig zu halten — die Funktion wird für jede Komponent-Instanz separat aufgerufen. Wenn Sie Daten einfach als Objekt deklarieren, würden alle Instanzen dieser Komponente die gleichen Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht möchten.

Sie verwenden `this`, um auf die Props einer Komponente und andere Eigenschaften von innerhalb der Datenfunktions zuzugreifen, wie Sie es möglicherweise erwarten. Wir werden gleich ein Beispiel dafür sehen.

> [!NOTE]
> Aufgrund der Funktionsweise von `this` in Arrow-Funktionen (Bindung an den Kontext des Elternteils) würden Sie nicht in der Lage sein, auf eines der notwendigen Attribute von innerhalb der Datenfunktion zuzugreifen, wenn Sie eine Arrow-Funktion verwenden. Verwenden Sie also keine Arrow-Funktion für die `data`-Eigenschaft.

Lassen Sie uns also eine `data`-Eigenschaft zu unserer `ToDoItem`-Komponente hinzufügen. Diese wird ein Objekt mit einer einzigen Eigenschaft zurückgeben, die wir `isDone` nennen, deren Wert `this.done` ist.

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

Vue macht hier ein wenig Magie — es bindet alle Ihre Props direkt an die Komponent-Instanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, die Sie bereits gesehen haben, und andere wie `methods`, `computed`, etc.) direkt an die Instanz. Dies geschieht teilweise, um sie für Ihre Vorlage verfügbar zu machen. Der Nachteil ist, dass Sie die Schlüssel über diese Attribute hinweg eindeutig halten müssen. Aus diesem Grund haben wir unser `data`-Attribut `isDone` anstelle von `done` genannt.

Nun müssen wir die `isDone`-Eigenschaft an unsere Komponente anhängen. In einer ähnlichen Weise, wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Vorlagen anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und Komponenten zu binden: **`v-bind`**. Der `v-bind`-Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie setzen vor dem Attribut/Prop, das Sie binden möchten, `v-bind:`. In den meisten Fällen können Sie eine Abkürzung für die `v-bind`-Eigenschaft verwenden, indem Sie das Attribut/Prop einfach mit einem Doppelpunkt vorsetzen. Also `:attribute="expression"` funktioniert genauso wie `v-bind:attribute="expression"`.

Also im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft an das `checked`-Attribut auf dem `<input>`-Element zu binden. Beide der folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können jede der beiden Muster verwenden. Es ist jedoch am besten, sie konsistent zu halten. Da die Kurzsyntax häufiger verwendet wird, wird dieses Tutorial bei diesem Muster bleiben.

Lassen Sie uns das tun. Aktualisieren Sie Ihr `<input>`-Element jetzt, um `:checked="isDone"` hinzuzufügen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` zum `ToDoItem`-Aufruf in `App.vue` übergeben. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, da andernfalls `true` als String übergeben wird. Das angezeigte Kontrollkästchen sollte markiert sein.

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

Versuchen Sie, `true` in `false` und wieder zurück zu ändern, wobei Sie die App zwischendurch neu laden, um zu sehen, wie sich der Zustand ändert.

## Geben von ToDos einer eindeutigen ID

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Zustand programmgesteuert festlegen können. Allerdings können wir derzeit nur eine `ToDoList`-Komponente auf der Seite hinzufügen, da die `id` fest codiert ist. Dies würde zu Fehlern mit assistiver Technologie führen, da die `id` benötigt wird, um Labels korrekt den Kontrollkästchen zuzuordnen. Um dies zu beheben, können wir die `id` programmgesteuert in den Komponentendaten setzen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um einen eindeutigen String zu generieren, um die Komponent-IDs eindeutig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine unkomplizierte Möglichkeit, Einzigartigkeit ohne den Rückgriff auf externe Bibliotheken sicherzustellen.

Fügen Sie als Nächstes ein `id`-Feld zu der `data`-Eigenschaft hinzu, wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenkette zurückzugeben, die wir dann mit `todo-` voranstellen:

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

Binden Sie als Nächstes die `id` sowohl an das `id`-Attribut unseres Kontrollkästchens als auch an das `for`-Attribut des Labels, indem Sie die vorhandenen `id`- und `for`-Attribute wie gezeigt aktualisieren:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Und das war's für diesen Artikel. An diesem Punkt haben wir eine gut funktionierende `ToDoItem`-Komponente, der ein anzuzeigendes Label übergeben werden kann, die ihren markierten Zustand speichert und jedes Mal mit einer eindeutigen `id` gerendert wird, wenn sie aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend weitere `<to-do-item></to-do-item>`-Aufrufe in `App.vue` einfügen und anschließend die gerenderte Ausgabe mit den Entwicklertools Ihres Browsers überprüfen.

Nun sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In unserem nächsten Artikel werden wir uns mit dem Hinzufügen einer Reihe von Aufgabenlistendaten zu unserer `App.vue`-Komponente befassen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mithilfe der `v-for`-Direktive anzeigen werden.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
