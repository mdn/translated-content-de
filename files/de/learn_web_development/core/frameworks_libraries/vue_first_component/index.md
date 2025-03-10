---
title: Erstellen unseres ersten Vue-Komponenten
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Es ist nun an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen mit der Erstellung einer Komponente, die jedes Element der Aufgabenliste darstellt. Auf dem Weg dorthin werden wir einige wichtige Konzepte kennenlernen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an diese über Props und das Speichern von Datenzuständen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, können Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue Repository](https://github.com/mdn/todo-vue) finden. Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie Kenntnisse
          über den
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Command Line</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben,
          die die Daten der App verwalten, und einer HTML-basierten Templatesyntax,
          die auf die zugrunde liegende DOM-Struktur verweist. Für die Installation
          und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie
          Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit
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
            >npm</a>
          installiert.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man eine Vue-Komponente erstellt, diese innerhalb einer anderen Komponente rendert,
        Daten über Props in sie übergibt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellung einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes Todo-Element anzeigt. Diese werden wir nutzen, um unsere Liste von Todos zu erstellen.

1. Erstellen Sie in Ihrem Verzeichnis `moz-todo-vue/src/components` eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Template-Abschnitt der Komponente, indem Sie `<template></template>` an den Anfang der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>` Abschnitt unter Ihrem Template-Abschnitt. Fügen Sie innerhalb der `<script>`-Tags ein Standard exportiertes Objekt `export default {}` hinzu, welches Ihr Komponentenobjekt ist.

Ihre Datei sollte jetzt so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Templates dürfen derzeit nur ein einziges Root-Element haben – ein Element muss alles innerhalb des Template-Abschnitts umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir werden dafür ein [`<div>`](/de/docs/Web/HTML/Element/div) verwenden.

1. Fügen Sie jetzt ein leeres `<div>` innerhalb Ihrer Komponentenvorlage hinzu.
2. Lassen Sie uns innerhalb dieses `<div>` ein Kontrollkästchen und ein entsprechendes Label hinzufügen. Fügen Sie dem Kontrollkästchen ein `id` hinzu und ein `for`-Attribut, das das Kontrollkästchen mit dem Label verbindet, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwenden von TodoItem in unserer App

Das ist alles gut und schön, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, es gibt also keine Möglichkeit, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns das jetzt hinzufügen.

1. Öffnen Sie `App.vue` erneut.
2. Fügen Sie an den Anfang Ihres `<script>`-Tags Folgendes hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie innerhalb Ihres Komponentenobjekts die Eigenschaft `components` hinzu und darin Ihre `ToDoItem`-Komponente, um sie zu registrieren.

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

Dies ist dieselbe Art und Weise, wie die `HelloWorld`-Komponente zuvor durch die Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>`-Element gehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponenten-Dateiname und seine Darstellung in JavaScript in PascalCase ist (z. B. `ToDoList`), und das entsprechende benutzerdefinierte Element in {{Glossary("kebab_case", "kebab-case")}} (z. B. `<to-do-list>`).
Es ist notwendig, diese Schreibweise zu verwenden, wenn Sie Vue-Templates [direkt im DOM](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Erstellen Sie unterhalb der [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) ein ungeordnetes Liste-Element ([`<ul>`](/de/docs/Web/HTML/Element/ul)), das ein einzelnes Listenelement ([`<li>`](/de/docs/Web/HTML/Element/li)) enthält.
2. Fügen Sie innerhalb des Listenelements `<to-do-item></to-do-item>` hinzu.

Der `<template>`-Abschnitt Ihrer `App.vue`-Datei sollte jetzt in etwa so aussehen:

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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie jetzt Ihr gerendertes `ToDoItem` sehen, das aus einem Kontrollkästchen und einem Label besteht.

![Der aktuelle Rendering-Zustand der App, die einen Titel "To-Do Liste" und ein einzelnes Kontrollkästchen mit Label enthält](rendered-todoitem.png)

## Komponenten mit Props dynamisch machen

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, da wir diese eigentlich nur einmal auf einer Seite einfügen können (IDs müssen eindeutig sein), und wir keine Möglichkeit haben, den Text des Labels festzulegen. Nichts davon ist dynamisch.

Was wir brauchen, ist eine Art Komponentenstatus. Dies kann erreicht werden, indem wir Props zu unserer Komponente hinzufügen. Sie können Props als ähnlich zu Eingaben in einer Funktion betrachten. Der Wert eines Props gibt Komponenten einen initialen Zustand, der deren Anzeige beeinflusst.

### Registrieren von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit besteht darin, Props einfach als ein Array von Strings aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines Props.
- Die zweite Möglichkeit besteht darin, Props als ein Objekt zu definieren, wobei jeder Schlüssel dem Namen des Props entspricht. Das Auflisten von Props als Objekt ermöglicht es Ihnen, Standardwerte festzulegen, Props als erforderlich zu markieren, grundlegendes JavaScript-Objekt-Typing (insbesondere bei JavaScript-Primärdatentypen) durchzuführen und einfache Prop-Validierung vorzunehmen.

> [!NOTE]
> Die Prop-Validierung erfolgt nur im Entwicklungsmodus, daher können Sie sich im Produktionsmodus nicht strikt darauf verlassen. Außerdem werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente werden wir die Objekt-Registrierungsmethode verwenden.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue`-Datei.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des export `default {}` Objekts hinzu, die ein leeres Objekt enthält.
3. Fügen Sie innerhalb dieses Objekts zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der `label`-Schlüssel sollte ein Objekt mit 2 Eigenschaften (oder **Props**, wie sie im Kontext der Verfügbarkeit für Komponenten genannt werden) haben.

   1. Die erste ist eine `required`-Eigenschaft mit dem Wert `true`. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein Label-Feld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen werden, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft auf den JavaScript-`String`-Typ (achten Sie auf das große "S"). Dies teilt Vue mit, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Nun zur `done`-Prop.

   1. Fügen Sie zuerst ein `default`-Feld mit dem Wert `false` hinzu. Dies bedeutet, dass, wenn keine `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, die `done`-Prop den Wert false hat (denken Sie daran, dass dies nicht erforderlich ist – wir benötigen `default` nur bei nicht erforderlichen Props).
   2. Fügen Sie dann ein `type`-Feld mit dem Wert `Boolean` hinzu. Dies teilt Vue mit, dass wir erwarten, dass der Wert dieser Prop ein JavaScript-Boolean-Typ ist.

Ihr Komponentenobjekt sollte jetzt so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwenden von registrierten Props

Mit diesen innerhalb des Komponentenobjekts definierten Props können wir diese Variablenwerte jetzt in unserem Template verwenden. Beginnen wir mit dem Hinzufügen des `label`-Props zur Komponentenvorlage.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Templatesyntax in Vue, die uns erlaubt, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, in unserem Template anzuzeigen, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass der Inhalt innerhalb von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall geben wir den Wert des `label`-Props aus.

Der Template-Abschnitt Ihrer Komponente sollte jetzt so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie werden sehen, dass das Todo-Element wie zuvor gerendert wird, jedoch ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie werden eine Warnung dieser Art in der Konsole sehen:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderlichen Prop markiert haben, aber wir haben der Komponente diesen Prop nie übergeben – wir haben definiert, wo innerhalb des Templates wir ihn verwenden möchten, aber wir haben ihn nicht an die Komponente übergeben, als wir sie aufgerufen haben. Lassen Sie uns das beheben.

Fügen Sie in Ihrer `App.vue`-Datei ein `label`-Prop der `<to-do-item></to-do-item>` Komponente hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt werden Sie das Label in Ihrer App sehen, und die Warnung wird nicht mehr in der Konsole ausgegeben.

Das ist also Props in Kürze. Als nächstes werden wir darauf eingehen, wie Vue Zustandsdaten beibehält.

## Das Datenobjekt von Vue

Wenn Sie den Wert des `label`-Props ändern, das in Ihrem `App`-Komponentenaufruf an das `<to-do-item></to-do-item>` übergeben wird, sollten Sie sehen, dass er aktualisiert wird. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Allerdings machen wir derzeit nichts mit der "done"-Prop — wir können die Kontrollkästchen in der Benutzeroberfläche aktivieren, aber nirgends in der App zeichnen wir auf, ob eine Aufgabe tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir die `done`-Prop an das `checked`-Attribut auf dem [`<input>`](/de/docs/Web/HTML/Element/input)-Element binden, sodass es als Aufzeichnung dafür dienen kann, ob das Kontrollkästchen aktiviert ist oder nicht. Es ist jedoch wichtig, dass Props als Einweg-Datenbindung dienen — eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Hierfür gibt es viele Gründe. Teilweise können Komponenten, die Props bearbeiten, das Debuggen zu einer Herausforderung machen. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein, nachzuverfolgen, woher die Änderungen an diesem Wert kamen. Darüber hinaus können Änderungen an Props dazu führen, dass Komponenten neu gerendert werden. Das mutieren von Props in einer Komponente würde also das erneute Rendern der Komponente auslösen, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done`-Zustand mit der `data`-Eigenschaft von Vue verwalten. Die `data`-Eigenschaft ist der Ort, an dem Sie den lokalen Zustand in einer Komponente verwalten können. Sie befindet sich innerhalb des Komponentenobjekts neben der `props`-Eigenschaft und hat die folgende Struktur:

```js
data() {
  return {
    key: value
  }
}
```

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies dient dazu, die Datenwerte für jede Instanz einer Komponente zur Laufzeit eindeutig zu halten — die Funktion wird für jede Komponenteninstanz separat aufgerufen. Würden Sie Daten einfach als ein Objekt deklarieren, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie vermeiden möchten.

Sie verwenden `this`, um von innen `data` auf die Props und andere Eigenschaften einer Komponente zuzugreifen, wie Sie möglicherweise erwarten. Wir werden gleich ein Beispiel dazu sehen.

> [!NOTE]
> Aufgrund der Art und Weise, wie `this` in Pfeilfunktionen funktioniert (Verbindung zum Kontext des Elternteils), könnten Sie nicht auf die notwendigen Attribute von innen `data` zugreifen, wenn Sie eine Pfeilfunktion verwenden. Verwenden Sie daher keine Pfeilfunktion für die `data`-Eigenschaft.

Lassen Sie uns also der `ToDoItem`-Komponente eine `data`-Eigenschaft hinzufügen. Diese wird ein Objekt zurückgeben, das eine einzige Eigenschaft enthält, die wir `isDone` nennen werden, dessen Wert `this.done` ist.

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

Vue macht hier ein wenig Magie — es bindet alle Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, das Sie bereits gesehen haben, und andere wie `methods`, `computed` usw.) direkt an die Instanz. Dies geschieht teilweise, um sie Ihrem Template zur Verfügung zu stellen. Der Nachteil davon ist, dass Sie die Schlüsselnamen über diese Attribute hinweg eindeutig halten müssen. Aus diesem Grund haben wir unser `data`-Attribut `isDone` statt `done` genannt.

Wir müssen nun die `isDone`-Eigenschaft an unsere Komponente anhängen. In ähnlicher Weise, wie Vue `\{{}}` verwendet, um JavaScript-Ausdrücke innerhalb von Templates anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und -Komponenten zu binden: **`v-bind`**. Der `v-bind`-Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie fügen dem Attribut/Prop, das Sie binden möchten, `v-bind:` voran. In den meisten Fällen können Sie eine Kurzform für die `v-bind`-Eigenschaft verwenden, indem Sie das Attribut/Prop schlicht mit einem Doppelpunkt voranstellen. Also `:attribute="expression"` funktioniert genauso wie `v-bind:attribute="expression"`.

Im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft an das `checked`-Attribut auf dem `<input>`-Element zu binden. Beide der folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können wählen, welches Muster Sie bevorzugen. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzformularsyntax häufiger verwendet wird, wird dieses Tutorial bei diesem Muster bleiben.

Lassen Sie uns dies nun tun. Aktualisieren Sie jetzt Ihr `<input>`-Element, um `:checked="isDone"` einzuschließen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` zur `ToDoItem`-Aufruf in `App.vue` hinzufügen. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, da andernfalls `true` als Zeichenkette übergeben wird. Das angezeigte Kontrollkästchen sollte aktiviert sein.

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

Versuchen Sie, `true` in `false` und wieder zurück zu ändern, und laden Sie Ihre App dazwischen neu, um zu sehen, wie sich der Zustand ändert.

## Den Todos eine eindeutige ID geben

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Zustand programmatisch festlegen können. Allerdings können wir derzeit nur eine `ToDoList`-Komponente auf der Seite hinzufügen, da die `id` fest kodiert ist. Dies würde zu Fehlern mit assistiven Technologien führen, da die `id` benötigt wird, um Labels korrekt den Kontrollkästchen zuzuordnen. Um dies zu beheben, können wir die `id` im Komponentendaten programmatisch festlegen.

Wir können die [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID)-Methode verwenden, um eine eindeutige Zeichenfolge zu generieren und die `id`s der Komponente eindeutig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine einfache Möglichkeit, die Eindeutigkeit sicherzustellen, ohne auf externe Bibliotheken angewiesen zu sein.

Fügen Sie als Nächstes ein `id`-Feld zur `data`-Eigenschaft hinzu, wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenfolge zurückzugeben, die wir dann mit `todo-` präfixen:

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

Als Nächstes binden Sie die `id` sowohl an das `id`-Attribut des Kontrollkästchens als auch an das `for`-Attribut des Labels und aktualisieren die vorhandenen `id`- und `for`-Attribute wie dargestellt:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Damit beenden wir diesen Artikel. An diesem Punkt haben wir eine gut funktionierende `ToDoItem`-Komponente, die ein anzuzeigendes Label entgegennehmen kann, ihren aktivierten Zustand speichert und bei jedem Aufruf mit einer eindeutigen `id` gerendert wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend mehrere `<to-do-item></to-do-item>`-Aufrufe in `App.vue` einfügen und die gerenderten Ausgaben mit den DevTools Ihres Browsers überprüfen.

Jetzt sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In unserem nächsten Artikel werden wir uns damit befassen, eine Reihe von Daten zu Todo-Elementen zu unserer `App.vue`-Komponente hinzuzufügen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Direktive anzeigen werden.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
