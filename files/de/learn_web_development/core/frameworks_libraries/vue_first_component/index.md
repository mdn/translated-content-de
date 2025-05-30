---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Nun ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen damit, eine Komponente zu erstellen, die jedes Element in der To-Do-Liste darstellt. Dabei werden wir einige wichtige Konzepte kennenlernen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten über Props und das Speichern von Zustandsdaten.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Codes der Vue-App in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Für eine Live-Version siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
          Wissen über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortschrittlicheren Features von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit
          <a
            href="https://nodejs.org/en/download"
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
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wie man eine Vue-Komponente erstellt, sie in einer anderen
        Komponente rendert, Daten über Props in sie hineinpasst und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes To-Do-Element anzeigt. Diese werden wir nutzen, um unsere Liste von Todos zu erstellen.

1. Erstellen Sie in Ihrem `moz-todo-vue/src/components`-Verzeichnis eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Template-Abschnitt der Komponente, indem Sie `<template></template>` an den Anfang der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>`-Abschnitt unter Ihrem Template-Abschnitt. Fügen Sie innerhalb der `<script>`-Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, das Ihr Komponentenobjekt ist.

Ihre Datei sollte nun so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun beginnen, tatsächliche Inhalte zu unserem `ToDoItem` hinzuzufügen. Vue-Templates dürfen derzeit nur ein einziges Root-Element haben – ein Element muss alles im Template-Abschnitt umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) für dieses Root-Element.

1. Fügen Sie nun ein leeres `<div>` in Ihr Komponententemplate ein.
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

Das ist alles in Ordnung, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, also gibt es keine Möglichkeit, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns dies nun tun.

1. Öffnen Sie erneut `App.vue`.
2. Fügen Sie oben in Ihrem `<script>`-Tag das Folgende hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie in Ihrem Komponentenobjekt die Eigenschaft `components` hinzu und fügen Sie darin Ihre `ToDoItem`-Komponente hinzu, um sie zu registrieren.

Der Inhalt Ihres `<script>`-Tags sollte nun so aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist dasselbe, wie die `HelloWorld`-Komponente zuvor vom Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>`-Element gehen und es als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponentenname der Datei und seine Darstellung in JavaScript in PascalCase (z.B. `ToDoList`) ist und das entsprechende benutzerdefinierte Element in {{Glossary("kebab_case", "kebab-case")}} (z.B. `<to-do-list>`).
Es ist notwendig, diesen Stil der Namenskonvention zu verwenden, wenn Sie Vue-Templates [direkt im DOM](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Erstellen Sie unter dem [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)) mit einem einzelnen Listenelement ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)).
2. Fügen Sie in das Listenelement `<to-do-item></to-do-item>` ein.

Der `<template>`-Abschnitt Ihrer `App.vue`-Datei sollte nun in etwa so aussehen:

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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie jetzt Ihre gerenderte `ToDoItem`-Komponente sehen, die aus einem Kontrollkästchen und einem Label besteht.

![Der aktuelle Rendering-Zustand der App, der einen Titel der To-Do-Liste und ein einzelnes Kontrollkästchen mit Label umfasst](rendered-todoitem.png)

## Komponenten dynamisch machen mit Props

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, weil wir sie eigentlich nur einmal auf einer Seite verwenden können (IDs müssen eindeutig sein), und wir haben keine Möglichkeit, den Labeltext festzulegen. Nichts davon ist dynamisch.

Was wir benötigen, ist ein gewisser Komponentenstatus. Dies kann erreicht werden, indem wir der Komponente Props hinzufügen. Sie können sich Props wie Eingaben in einer Funktion vorstellen. Der Wert eines Props gibt Komponenten einen Anfangszustand, der ihre Anzeige beeinflusst.

### Registrieren von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit besteht darin, Props einfach als Array von Strings aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines Props.
- Die zweite Möglichkeit besteht darin, Props als Objekt zu definieren, wobei jeder Schlüssel dem Namen des Props entspricht. Wenn Props als Objekt aufgelistet werden, können Sie Standardwerte angeben, Props als erforderlich markieren, grundlegendes Objekttyping durchführen (speziell im Hinblick auf primitiven JavaScript-Typen), und einfache Prop-Validierung durchführen.

> [!NOTE]
> Die Prop-Validierung findet nur im Entwicklungsmodus statt, daher können Sie sich im Produktionseinsatz nicht darauf verlassen. Zusätzlich werden Prop-Validierungsfunktionen aufgerufen, bevor die Instanz der Komponente erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente verwenden wir die Methode zur Objektregistrierung.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue` Datei.
2. Fügen Sie eine `props`-Eigenschaft im exportieren `default {}` Objekt hinzu, das ein leeres Objekt enthält.
3. Fügen Sie in diesem Objekt zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der Wert des `label`-Schlüssels sollte ein Objekt mit 2 Eigenschaften (oder **Props**) sein, wie sie im Kontext der Verfügbarkeit für die Komponente genannt werden.

   1. Die erste ist eine `required`-Eigenschaft, die den Wert `true` hat. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein Labelfeld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Labelfeld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen werden, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft als den JavaScript-Typ `String` (beachten Sie das große "S"). Dies teilt Vue mit, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Nun zur `done`-Prop.

   1. Fügen Sie zuerst ein `default`-Feld hinzu, mit einem Wert von `false`. Dies bedeutet, dass, wenn kein `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, das `done`-Prop den Wert false haben wird (bedenken Sie, dass dies nicht erforderlich ist – wir benötigen nur `default` für nicht erforderliche Props).
   2. Fügen Sie als Nächstes ein `type`-Feld mit einem Wert von `Boolean` hinzu. Dies sagt Vue, dass wir erwarten, dass der Wert-Prop ein JavaScript-Boolean-Typ ist.

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

Mit diesen innerhalb des Komponentenobjekts definierten Props können wir diese Variablenwerte nun innerhalb unseres Templates verwenden. Lassen Sie uns beginnen, das Prop `label` in das Komponententemplate einzufügen.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Templatesyntax in Vue, die uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, innerhalb unseres Templates zu drucken, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass der Inhalt von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall drucken wir den Wert des Props `label`.

Ihr Komponenten-Templateabschnitt sollte jetzt so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie werden sehen, dass das To-Do-Element wie zuvor gerendert wird, aber ohne ein Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie sehen eine Warnung in der Konsole, die in etwa so aussieht:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als ein erforderliches Prop markiert haben, aber wir haben der Komponente dieses Prop nie gegeben – wir haben definiert, wo wir es im Template verwenden wollen, aber wir haben es nicht in die Komponente übergeben, wenn wir sie aufrufen. Lassen Sie uns das beheben.

Fügen Sie in Ihrer `App.vue`-Datei ein `label`-Prop zur `<to-do-item></to-do-item>`-Komponente hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt sehen Sie das Label in Ihrer App und die Warnung wird nicht mehr in der Konsole ausgegeben.

Das sind also Props in Kürze. Weiter geht's zur Datenhaltung in Vue.

## Vue's Datenobjekt

Wenn Sie den Wert des `label`-Props ändern, das in Ihren `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente eingegeben wurde, sollten Sie eine Aktualisierung sehen. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Allerdings machen wir derzeit nichts mit dem "done"-Prop – wir können die Kontrollkästchen in der Benutzeroberfläche aktivieren, aber nirgends in der App wird aufgezeichnet, ob ein To-Do-Element tatsächlich abgeschlossen ist.

Um dies zu erreichen, möchten wir das `done`-Prop der Komponente an das `checked`-Attribut auf dem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element binden, sodass es als Aufzeichnung darüber dient, ob das Kontrollkästchen aktiviert ist oder nicht. Allerdings ist es wichtig, dass Props als eindirektionale Datenbindung dienen — eine Komponente sollte den Wert ihrer eigenen Props niemals ändern. Dafür gibt es viele Gründe. Unter anderem können Komponenten beim Bearbeiten von Props das Debugging erschweren. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein nachzuverfolgen, woher die Änderungen an diesem Wert kamen. Darüber hinaus können das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. Also würde das Mutieren von Props in einer Komponente das Neurendern der Komponente auslösen, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done`-Zustand mit Hilfe der `data`-Eigenschaft von Vue verwalten. Die `data`-Eigenschaft ist der Ort, an dem Sie lokalen Zustand in einer Komponente verwalten können; sie lebt im Komponentenobjekt neben der `props`-Eigenschaft und hat folgende Struktur:

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

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies dient dazu, die Datenwerte für jede Instanz einer Komponente zur Laufzeit einzigartig zu halten – die Funktion wird separat für jede Komponenteninstanz aufgerufen. Wenn Sie die Daten einfach als Objekt deklarieren würden, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht möchten.

Sie verwenden `this`, um auf die Props und andere Eigenschaften einer Komponente von innerhalb der Daten zuzugreifen, wie Sie vielleicht erwarten würden. Ein Beispiel dazu werden wir in Kürze sehen.

> [!NOTE]
> Aufgrund der Art und Weise, wie `this` in Pfeilfunktionen (Binding an den Kontext des Elternteils) funktioniert, könnten Sie keine der notwendigen Attribute von innen aus `data` zugreifen, wenn Sie eine Pfeilfunktion verwenden würden. Verwenden Sie also keine Pfeilfunktion für die `data`-Eigenschaft.

Also lassen Sie uns eine `data`-Eigenschaft zu unserer `ToDoItem` Komponente hinzufügen. Diese wird ein Objekt zurückgeben, das eine einzelne Eigenschaft enthält, die wir `isDone` nennen werden, deren Wert `this.done` ist.

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

Vue macht hier ein wenig Magie – es bindet alle Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, die Sie bereits gesehen haben, und andere wie `methods`, `computed`, etc.) direkt an die Instanz. Das ist teilweise so, damit sie Ihrem Template zur Verfügung stehen. Der Nachteil davon ist, dass Sie die Schlüssel in diesen Attributen einzigartig halten müssen. Deshalb haben wir unser Datenattribut `isDone` genannt und nicht `done`.

Also müssen wir jetzt die `isDone`-Eigenschaft an unsere Komponente binden. In ähnlicher Weise wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke in Templates anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und -Komponenten zu binden: **`v-bind`**. Der `v-bind`-Ausdruck sieht folgendermaßen aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie setzen das Attribut/Prop, das Sie binden möchten, mit `v-bind:` davor. In den meisten Fällen können Sie eine Abkürzung für die `v-bind`-Eigenschaft verwenden, indem Sie einfach das Attribut/Prop mit einem Doppelpunkt davor notieren. Also funktioniert `:attribute="expression"` genauso wie `v-bind:attribute="expression"`.

Also im Fall vom Kontrollkästchen in unserer `ToDoItem` Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft an das `checked`-Attribut auf dem `<input>`-Element zu mappen. Beide Varianten sind äquivalent:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können das Muster verwenden, das Ihnen am liebsten ist. Es ist jedoch am besten, es konsistent zu halten. Da die Abkürzung häufiger verwendet wird, bleibt dieses Tutorial bei diesem Muster.

Also lassen Sie uns das tun. Aktualisieren Sie Ihr `<input>`-Element jetzt, um `:checked="isDone"` einzufügen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` beim Aufruf von `ToDoItem` in `App.vue` übergeben. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, weil andernfalls `true` als String übergeben wird. Das angezeigte Kontrollkästchen sollte aktiviert sein.

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

Versuchen Sie, `true` in `false` und zurück zu ändern, und laden Sie Ihre App jeweils neu, um zu sehen, wie sich der Zustand ändert.

## Todos eine eindeutige ID geben

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Zustand programmatisch festlegen können. Allerdings können wir derzeit nur eine `ToDoList`-Komponente auf der Seite hinzufügen, da die `id` fest kodiert ist. Dies würde zu Fehlern mit unterstützender Technologie führen, da die `id` benötigt wird, um Labels korrekt den Kontrollkästchen zuzuordnen. Um dies zu beheben, können wir die `id` programmatisch in den Komponentendaten setzen.

Wir können die [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID)-Methode verwenden, um eine eindeutige Zeichenfolge zu generieren, um die Komponenten-IDs einzigartig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine einfache Möglichkeit, Einzigartigkeit ohne Abhängigkeit von externen Bibliotheken sicherzustellen.

Fügen Sie als Nächstes ein `id`-Feld zur `data`-Eigenschaft hinzu, wie unten gezeigt; das verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenfolge zurückzugeben, die wir dann mit `todo-` voranstellen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
  data() {
    return {
      isDone: this.done,
      id: `todo-${crypto.randomUUID()}`,
    };
  },
};
```

Bindet als nächstes die `id` sowohl an das `id`-Attribut unseres Kontrollkästchens als auch an das `for`-Attribut des Labels, und aktualisieren Sie die vorhandenen `id` und `for` Attribute wie gezeigt:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Und das war's für diesen Artikel. An diesem Punkt haben wir eine gut funktionierende `ToDoItem`-Komponente, der ein anzuzeigendes Label übergeben werden kann, die ihren geprüften Zustand speichert und die bei jedem Aufruf mit einer eindeutigen `id` gerendert wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend weitere `<to-do-item></to-do-item>`-Aufrufe in `App.vue` hinzufügen und dann die gerenderte Ausgabe mit den DevTools Ihres Browsers überprüfen.

Jetzt sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In unserem nächsten Artikel werden wir uns ansehen, wie wir einen Satz von ToDo-Elementdaten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit dem `v-for`-Direktiv anzeigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
