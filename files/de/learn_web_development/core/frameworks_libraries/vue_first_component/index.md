---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Nun ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen, indem wir eine Komponente erstellen, um jedes Element in der Aufgabenliste darzustellen. Dabei lernen wir einige wichtige Konzepte kennen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten über Props und das Speichern von Datenzuständen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispielcodes der Vue-App in unserem [todo-vue repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Basis-<a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen,
          sowie Kenntnisse der
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Befehlszeile/Terminal</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Template-Syntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu verwenden (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit
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
        Lernen, wie man eine Vue-Komponente erstellt, sie in einer anderen Komponente rendert, Daten mithilfe von Props in sie übergibt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die einen einzigen Aufgabenpunkt anzeigt. Wir werden dies verwenden, um unsere Aufgabenliste zu erstellen.

1. Erstellen Sie in Ihrem Verzeichnis `moz-todo-vue/src/components` eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Template-Bereich der Komponente, indem Sie `<template></template>` oben in die Datei einfügen.
3. Erstellen Sie einen `<script></script>`-Bereich unterhalb Ihres Template-Bereichs. Fügen Sie innerhalb der `<script>`-Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, welches Ihr Komponentenobjekt ist.

Ihre Datei sollte nun so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Templates dürfen derzeit nur ein einzelnes Root-Element haben – ein Element muss alles innerhalb des Template-Bereichs umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir werden dafür ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) verwenden.

1. Fügen Sie nun ein leeres `<div>` in Ihrem Komponententemplate hinzu.
2. Innerhalb dieses `<div>` fügen wir ein Kontrollkästchen und ein entsprechendes Label hinzu. Fügen Sie dem Kontrollkästchen eine `id` hinzu und ein `for`-Attribut, das das Kontrollkästchen dem Label zuordnet, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwendung von TodoItem in unserer Anwendung

Das ist alles in Ordnung, aber wir haben die Komponente noch nicht zu unserer Anwendung hinzugefügt, daher können wir sie nicht testen und sehen, ob alles funktioniert. Lassen Sie es uns jetzt hinzufügen.

1. Öffnen Sie `App.vue` erneut.
2. Fügen Sie oben in Ihrem `<script>`-Tag das folgende hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie in Ihrem Komponentenobjekt die `components`-Eigenschaft hinzu, und fügen Sie darin Ihre `ToDoItem`-Komponente hinzu, um sie zu registrieren.

Der Inhalt Ihres `<script>` sollte nun so aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist die gleiche Vorgehensweise, wie die `HelloWorld`-Komponente vorher vom Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der Anwendung zu rendern, müssen Sie in Ihr `<template>`-Element hinaufgehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Dateiname der Komponente und ihre Darstellung in JavaScript im PascalCase (z.B. `ToDoList`) und das entsprechende benutzerdefinierte Element im {{Glossary("kebab_case", "kebab-case")}} (z.B. `<to-do-list>`) ist.
Es ist notwendig, diesen Schreibstil zu verwenden, wenn Sie Vue-Templates [direkt im DOM](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Unterhalb des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) erstellen Sie eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)) mit einem einzigen Listenelement ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)).
2. Fügen Sie innerhalb des Listenelements `<to-do-item></to-do-item>` hinzu.

Der `<template>`-Bereich Ihrer `App.vue`-Datei sollte nun so aussehen:

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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie nun Ihre gerenderte `ToDoItem`-Komponente sehen, bestehend aus einem Kontrollkästchen und einem Label.

![Der aktuelle Renderzustand der App, der einen Titel der Aufgabenliste und ein einzelnes Kontrollkästchen mit Label umfasst](rendered-todoitem.png)

## Komponenten dynamisch mit Props machen

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, da wir sie nur einmal auf einer Seite einschließen können (IDs müssen eindeutig sein) und wir keine Möglichkeit haben, den Labeltext festzulegen. Nichts daran ist dynamisch.

Was wir brauchen, ist ein gewisser Komponentenstatus. Dies kann erreicht werden, indem wir unserer Komponente Props hinzufügen. Sie können Props als eine Art Eingabewerte für eine Funktion betrachten. Der Wert eines Props gibt Komponenten einen Anfangszustand, der ihre Anzeige beeinflusst.

### Registrierung von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit besteht darin, Props einfach als ein Array von Zeichenketten aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines Props.
- Die zweite Möglichkeit besteht darin, Props als ein Objekt zu definieren, wobei jeder Schlüssel dem Prop-Namen entspricht. Listing von Props als Objekt ermöglicht es Ihnen, Standardwerte festzulegen, Props als erforderlich zu markieren, grundlegende Objekt-Typisierungen (speziell für JavaScript-Primitivtypen) durchzuführen und einfache Props-Validierung zu implementieren.

> [!NOTE]
> Die Props-Validierung erfolgt nur im Entwicklungsmodus, sodass Sie sich im Produktivmodus nicht strikt darauf verlassen können. Zudem werden Props-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente verwenden wir die Methode der Objektregistrierung.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue`-Datei.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des Exports `default {}`-Objekts hinzu, das ein leeres Objekt enthält.
3. Fügen Sie in diesem Objekt zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der `label`-Schlüssel sollte ein Objekt mit 2 Eigenschaften (oder **Props**, wie sie im Kontext der Verfügbarkeit für die Komponenten genannt werden) sein.

   1. Die erste ist eine `required`-Eigenschaft, die den Wert `true` haben wird. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein Label-Feld hat. Vue wird uns warnen, wenn ein `ToDoItem`-Komponente kein Label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft auf den JavaScript-`String`-Typ (beachten Sie das große "S"). Dies sagt Vue, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Jetzt zu dem `done`-Prop.
   1. Fügen Sie zuerst ein `default`-Feld hinzu mit dem Wert `false`. Dies bedeutet, dass wenn kein `done`-Prop an ein `ToDoItem`-Komponente übergeben wird, das `done`-Prop den Wert false hat (beachten Sie, dass dies nicht erforderlich ist - wir benötigen `default` nur für nicht erforderliche Props).
   2. Fügen Sie als nächstes ein `type`-Feld mit dem Wert `Boolean` hinzu. Dies sagt Vue, dass wir erwarten, dass der Wert-Prop ein JavaScript-Boolean-Typ ist.

Ihr Komponentenobjekt sollte nun so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwendung registrierter Props

Mit diesen in das Komponentenobjekt definierten Props können wir diese Variablenwerte nun innerhalb unseres Templates verwenden. Lassen Sie uns mit dem `label`-Prop beginnen, das wir dem Komponenten-Template hinzufügen.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Templatesyntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, innerhalb unseres Templates zu drucken, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass Inhalte innerhalb `\{{}}` als Text und nicht als HTML angezeigt werden. In diesem Fall drucken wir den Wert des `label`-Props.

Der Template-Abschnitt Ihrer Komponente sollte nun so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie sehen das gerenderte ToDo-Element wie zuvor, aber ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie sehen eine Warnung ähnlich der folgenden in der Konsole:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderliches Prop markiert haben, aber wir haben der Komponente dieses Prop nie gegeben – wir haben definiert, wo im Template wir es verwenden wollen, aber wir haben es der Komponente beim Aufruf noch nicht übergeben. Lassen Sie uns das beheben.

Fügen Sie in Ihrer `App.vue`-Datei ein `label`-Prop zu der `<to-do-item></to-do-item>`-Komponente hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt sehen Sie das Label in Ihrer App und die Warnung wird nicht wieder in der Konsole ausgegeben.

Das sind also Props im Wesentlichen. Als nächstes gehen wir darauf ein, wie Vue den Datenstatus speichert.

## Vues Datenobjekt

Wenn Sie den Wert des `label`-Props, das im `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente übergeben wird, ändern, sollten Sie sehen, wie es aktualisiert wird. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Derzeit machen wir jedoch nichts mit dem "done"-Prop – wir können die Kontrollkästchen in der Benutzeroberfläche ankreuzen, aber nirgendwo in der App speichern wir, ob ein Aufgabenpunkt tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir das `done`-Prop der Komponente an das `checked`-Attribut des [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elements binden, sodass es als Aufzeichnung dient, ob das Kontrollkästchen angekreuzt ist oder nicht. Wichtig ist, dass Props als Einweg-Datenbindung dienen – eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Dafür gibt es viele Gründe. Zum Teil können Komponenten, die Props bearbeiten, das Debuggen erschweren. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein nachzuverfolgen, woher die Änderungen dieses Wertes kamen. Darüber hinaus kann das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. Wenn Props in einer Komponente mutiert werden, könnte dies dazu führen, dass die Komponente erneut gerendert wird, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done`-Status mit Vues `data`-Eigenschaft verwalten. Die `data`-Eigenschaft ist, wo Sie den lokalen Status in einer Komponente verwalten können. Sie befindet sich im Komponentenobjekt neben der `props`-Eigenschaft und hat die folgende Struktur:

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

Sie werden bemerken, dass die `data`-Eigenschaft eine Funktion ist. Dies dient dazu, die Datenwerte einzigartig für jede Instanz einer Komponente zur Laufzeit zu halten – die Funktion wird separat für jede Komponenteninstanz aufgerufen. Wenn Sie Daten einfach als ein Objekt deklarieren würden, würden alle Instanzen dieser Komponente die gleichen Werte teilen. Dies ist eine Nebenwirkung der Art und Weise, wie Vue Komponenten registriert, und etwas, was Sie nicht wollen.

Sie verwenden `this`, um auf die Props und andere Eigenschaften einer Komponente von innerhalb der Daten zuzugreifen, wie Sie vielleicht erwarten würden. Wir werden gleich ein Beispiel dafür sehen.

> [!NOTE]
> Aufgrund der Funktionsweise von `this` in Pfeilfunktionen (Bindung an den Kontext des Elternteils) könnten Sie von innerhalb `data` auf keine der erforderlichen Attribute zugreifen, wenn Sie eine Pfeilfunktion verwenden würden. Verwenden Sie deshalb keine Pfeilfunktion für die `data`-Eigenschaft.

Fügen Sie also unserer `ToDoItem`-Komponente eine `data`-Eigenschaft hinzu. Diese wird ein Objekt zurückgeben, das eine einzelne Eigenschaft enthält, die wir `isDone` nennen, und deren Wert `this.done` ist.

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

Vue macht hier etwas Magie – es bindet alle Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (arbeitsweise `data`, die Sie bereits gesehen haben, und andere wie `methods`, `computed`, usw.) direkt an die Instanz. Dies dient unter anderem dazu, sie Ihrem Template zur Verfügung zu stellen. Der Nachteil davon ist, dass Sie die Schlüssel eindeutig über diese Attribute hinweg halten müssen. Aus diesem Grund haben wir unser `data`-Attribut `isDone` anstelle von `done` genannt.

Nun müssen wir die `isDone`-Eigenschaft an unsere Komponente anhängen. In ähnlicher Weise, wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Templates anzuzeigen, hat Vue eine spezielle Syntax zum Binden von JavaScript-Ausdrücken an HTML-Elemente und -Komponenten: **`v-bind`**. Der `v-bind`-Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie setzen ein Präfix vor das Attribut/Prop, das Sie binden möchten, mit `v-bind:`. In den meisten Fällen können Sie eine Kurzform für die `v-bind`-Eigenschaft verwenden, die darin besteht, das Attribut/Prop einfach mit einem Doppelpunkt zu präfixen. Also funktioniert `:attribute="expression"` genauso wie `v-bind:attribute="expression"`.

Im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft an das `checked`-Attribut des `<input>`-Elements zu mappen. Beide der folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie sind frei, das Muster zu verwenden, das Sie möchten. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzform-Syntax häufiger verwendet wird, wird dieses Tutorial an diesem Muster festhalten.

Also lassen Sie uns das tun. Aktualisieren Sie jetzt Ihr `<input>`-Element, um `:checked="isDone"` einzuschließen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` an den `ToDoItem`-Aufruf in `App.vue` übergeben. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, da `true` sonst als String übergeben wird. Das angezeigte Kontrollkästchen sollte angekreuzt sein.

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

Versuchen Sie, `true` in `false` zu ändern und wieder zurückzugehen und Ihre App dazwischen neu zu laden, um zu sehen, wie sich der Status ändert.

## Aufgaben eine eindeutige ID geben

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Status programmatisch festlegen können. Derzeit können wir jedoch nur eine `ToDoList`-Komponente auf der Seite hinzufügen, da die `id` fest codiert ist. Dies würde bei Hilfstechnologien zu Fehlern führen, da die `id` benötigt wird, um Labels korrekt den Kontrollkästchen zuzuordnen. Um dies zu beheben, können wir die `id`-Einstellungen im Komponentendatenprogramm programmatisch setzen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um eine eindeutige Zeichenfolge zu generieren, um die Komponenten-`id`s eindeutig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine einfache Möglichkeit, die Einzigartigkeit zu gewährleisten, ohne auf externe Bibliotheken angewiesen zu sein.

Fügen Sie als nächstes ein `id`-Feld zur `data`-Eigenschaft hinzu, wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenfolge zurückzugeben, die dann mit `todo-` versehen wird:

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

Binden Sie anschließend die `id` sowohl an das `id`-Attribut des Kontrollkästchens als auch an das `for`-Attribut des Labels, indem Sie die vorhandenen `id`- und `for`-Attribute aktualisieren, wie gezeigt:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Und das war's für diesen Artikel. An diesem Punkt haben wir eine gut funktionierende `ToDoItem`-Komponente, die ein anzuzeigendes Label erhalten kann, ihren angekreuzten Status speichert und jedes Mal mit einer eindeutigen `id` gerendert wird, wenn sie aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend weitere `<to-do-item></to-do-item>`-Aufrufe in `App.vue` hinzufügen und dann ihre gerenderten Ausgaben mit den DevTools Ihres Browsers überprüfen.

Nun sind wir bereit, mehrere `ToDoItem`-Komponenten in unsere App hinzuzufügen. In unserem nächsten Artikel werden wir uns mit dem Hinzufügen eines Satzes von Aufgabendaten zu unserer `App.vue`-Komponente beschäftigen, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten mit der `v-for`-Anweisung anzeigen werden.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
