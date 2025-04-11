---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen damit, eine Komponente zu erstellen, die jedes Element in der Aufgabenliste darstellt. Unterwegs werden wir einige wichtige Konzepte lernen, wie zum Beispiel das Aufrufen von Komponenten in anderen Komponenten, das Übergeben von Daten an sie über Props und das Speichern von Datenzuständen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine vollständige Version des Beispiels der Vue-App im [todo-vue Repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal-/Befehlszeile</a>.
        </p>
        <p>
          Vue-Komponenten sind eine Kombination aus JavaScript-Objekten, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit
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
        Lernen, wie man eine Vue-Komponente erstellt, sie innerhalb einer anderen Komponente rendert, Daten über Props an sie übergibt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die einen einzelnen Aufgabenpunkt anzeigt. Wir verwenden dies, um unsere Liste von Aufgaben zu erstellen.

1. Erstellen Sie in Ihrem Verzeichnis `moz-todo-vue/src/components` eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Vorlagenabschnitt der Komponente, indem Sie `<template></template>` an den Anfang der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>`-Abschnitt unter Ihrem Vorlagenabschnitt. Fügen Sie innerhalb der `<script>`-Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, das Ihr Komponentenobjekt ist.

Ihre Datei sollte nun wie folgt aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können jetzt beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Vorlagen erlauben derzeit nur ein einziges Hauptelement — ein Element muss alles innerhalb des Vorlagenbereichs umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden dazu ein [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) als Hauptelement.

1. Fügen Sie jetzt ein leeres `<div>` innerhalb Ihrer Komponentenvorlage hinzu.
2. Fügen Sie innerhalb dieses `<div>` ein Kontrollkästchen und das entsprechende Label hinzu. Fügen Sie dem Kontrollkästchen eine `id` hinzu und ein `for`-Attribut, das das Kontrollkästchen mit dem Label verbindet, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwenden von TodoItem innerhalb unserer App

Das ist alles in Ordnung, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, es gibt also keine Möglichkeit, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns das jetzt tun.

1. Öffnen Sie `App.vue` erneut.
2. Fügen Sie oben in Ihrem `<script>`-Tag das folgende hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie Ihrem Komponentenobjekt die `components`-Eigenschaft hinzu und registrieren Sie darin Ihre `ToDoItem`-Komponente.

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

Dies ist dieselbe Methode, mit der die `HelloWorld`-Komponente zuvor durch die Vue-CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie zu Ihrem `<template>`-Element nach oben gehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponentenname in der Datei und deren Darstellung in JavaScript im PascalCase ist (z.B. `ToDoList`), und das entsprechende benutzerdefinierte Element ist im {{Glossary("kebab_case", "Kebab-Case")}} (z.B. `<to-do-list>`).
Es ist notwendig, diesen Schreibstil zu verwenden, wenn Sie Vue-Vorlagen [direkt im DOM] (https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats) schreiben.

1. Erstellen Sie unterhalb des [`<h1>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Reference/Elements/ul)), die ein einzelnes Listenelement ([`<li>`](/de/docs/Web/HTML/Reference/Elements/li)) enthält.
2. Fügen Sie innerhalb des Listenelements `<to-do-item></to-do-item>` hinzu.

Der `<template>`-Bereich Ihrer `App.vue`-Datei sollte nun ungefähr so aussehen:

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

![Der aktuelle Renderzustand der App, der einen Titel von To-Do List und ein einziges Kontrollkästchen und Label enthält](rendered-todoitem.png)

## Komponenten mit Props dynamisch gestalten

Unsere `ToDoItem`-Komponente ist noch nicht sehr nützlich, da wir sie nur einmal auf einer Seite einbinden können (IDs müssen eindeutig sein), und wir haben keine Möglichkeit, den Labeltext festzulegen. Nichts davon ist dynamisch.

Was wir benötigen, ist ein gewisser Komponentenstatus. Dies kann durch Hinzufügen von "Props" zu unserer Komponente erreicht werden. Sie können sich "Props" ähnlich wie Eingänge in einer Funktion vorstellen. Der Wert eines Props gibt Komponenten einen Anfangszustand, der ihre Anzeige beeinflusst.

### Registrieren von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit besteht darin, Props einfach als Array von Strings aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines Props.
- Die zweite Möglichkeit besteht darin, Props als Objekt zu definieren, wobei jeder Schlüssel dem Namen des Props entspricht. Die Auflistung von Props als Objekt ermöglicht es Ihnen, Standardwerte anzugeben, Props als erforderlich zu markieren, grundlegende Objekttypen (insbesondere in Bezug auf primitive JavaScript-Typen) zu definieren und einfache Prop-Validierung durchzuführen.

> [!NOTE]
> Die Prop-Validierung erfolgt nur im Entwicklungsmodus, daher können Sie sich im Produktionsmodus nicht streng darauf verlassen. Darüber hinaus werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente verwenden wir die Methode der Objektregistrierung.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue`-Datei.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des Exports `default {}`-Objekts hinzu, die ein leeres Objekt enthält.
3. Fügen Sie in dieses Objekt zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der Wert des Schlüssels `label` sollte ein Objekt mit 2 Eigenschaften (oder **Props**, wie sie im Kontext der Verfügbarkeit für die Komponenten genannt werden) sein.

   1. Die erste Eigenschaft ist eine `required`-Eigenschaft mit einem Wert von `true`. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein Label-Feld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft auf den JavaScript-Datentyp `String` (beachten Sie das große "S"). Dies sagt Vue, dass wir erwarten, dass der Wert dieses Props ein String ist.

5. Nun zum `done`-Prop.

   1. Zuerst fügen Sie ein `default`-Feld hinzu, mit einem Wert von `false`. Dies bedeutet, dass das `done`-Prop, wenn kein Wert an eine `ToDoItem`-Komponente übergeben wird, einen Wert von false hat (beachten Sie, dass dies nicht erforderlich ist — wir benötigen `default` nur für nicht erforderliche Props).
   2. Fügen Sie als Nächstes ein `type`-Feld mit einem Wert von `Boolean` hinzu. Dies sagt Vue, dass wir erwarten, dass der Wert ein JavaScript-`Boolean`-Typ ist.

Ihr Komponentenobjekt sollte nun so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwenden registrierter Props

Mit diesen Props, die innerhalb des Komponentenobjekts definiert sind, können wir diese Variablenwerte nun innerhalb unserer Vorlage verwenden. Lassen Sie uns damit beginnen, das `label`-Prop zur Komponenten-Vorlage hinzuzufügen.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Templatesyntax in Vue, die es uns ermöglicht, JavaScript-Ausdrücke, die in unserer Klasse definiert sind, innerhalb unserer Vorlage auszugeben, einschließlich Werte und Methoden. Es ist wichtig zu wissen, dass der Inhalt innerhalb von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall geben wir den Wert des `label`-Props aus.

Der Vorlagenabschnitt Ihrer Komponente sollte jetzt so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und sehen Sie sich das gerenderte Aufgabenobjekt an, jetzt ohne Label (oh nein!). Gehen Sie zu den DevTools in Ihrem Browser und Sie sehen eine Warnung in dieser Richtung in der Konsole:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderliches Prop markiert haben, aber wir haben der Komponente niemals dieses Prop gegeben — wir haben festgelegt, wo wir es in der Vorlage verwenden möchten, aber wir haben es beim Aufruf nicht in die Komponente übergeben. Lassen Sie uns das beheben.

Fügen Sie in Ihrer `App.vue`-Datei das `label`-Prop der `<to-do-item></to-do-item>`-Komponente hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt sehen Sie das Label in Ihrer App und die Warnung wird nicht mehr in der Konsole ausgegeben.

Das sind also Props in Kurzform. Als Nächstes gehen wir darauf ein, wie Vue den Datenstatus beibehält.

## Vues Datenobjekt

Wenn Sie den Wert des `label`-Props, das in die `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente übergeben wird, ändern, sollten Sie es aktualisiert sehen. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Wir tun jedoch derzeit nichts mit dem "done"-Prop — wir können die Kontrollkästchen in der Benutzeroberfläche aktivieren, aber nirgends in der App zeichnen wir auf, ob eine Aufgabe tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir das `done`-Prop der Komponente an das `checked`-Attribut des [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Elements binden, sodass es als Aufzeichnung dient, ob das Kontrollkästchen aktiviert ist oder nicht. Es ist jedoch wichtig, dass Props als unidirektionale Datenbindung dienen — eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Es gibt viele Gründe dafür. Zum einen können Komponenten, die Props bearbeiten, das Debuggen erschweren. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein, nachzuvollziehen, woher die Änderungen dieses Wertes kamen. Darüber hinaus kann das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. Das Mutieren von Props in einer Komponente würde daher das erneute Rendern der Komponente auslösen, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done`-Zustand mit Hilfe der `data`-Eigenschaft von Vue verwalten. Die `data`-Eigenschaft ist der Ort, an dem Sie lokalen Zustand in einer Komponente verwalten können. Sie lebt innerhalb des Komponentenobjekts neben der `props`-Eigenschaft und hat die folgende Struktur:

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

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies dient dazu, die Datenwerte für jede Instanz einer Komponente zur Laufzeit eindeutig zu halten — die Funktion wird für jede Komponenteninstanz getrennt aufgerufen. Wenn Sie Daten einfach als Objekt deklarieren würden, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert und etwas, das Sie nicht wollen.

Sie verwenden `this`, um auf die Props und andere Eigenschaften einer Komponente von innen her zuzugreifen, wie Sie es möglicherweise erwarten. Wir werden dies gleich in einem Beispiel sehen.

> [!NOTE]
> Aufgrund der Art und Weise, wie `this`-Objekte in Pfeilfunktionen (arrow functions) funktionieren (sie binden an den Kontext des Elternteils), könnten Sie nicht auf die erforderlichen Attribute aus der `data`-Funktion zugreifen, wenn Sie eine Pfeilfunktion verwenden würden. Verwenden Sie also keine Pfeilfunktion für die `data`-Eigenschaft.

Fügen Sie also unserer `ToDoItem`-Komponente eine `data`-Eigenschaft hinzu. Dies wird ein Objekt zurückgeben, das eine einzelne Eigenschaft enthält, die wir `isDone` nennen, deren Wert `this.done` ist.

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

Vue macht hier ein kleines magisches Stück Arbeit — es bindet alle Ihre Props direkt an die Komponenteninstanz, so dass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, die Sie bereits gesehen haben, und andere wie `methods`, `computed`, etc.) direkt an die Instanz. Dies dient teilweise dazu, sie ihrer Vorlage zur Verfügung zu stellen. Der Nachteil davon ist, dass Sie die Schlüssel über diese Attribute hinweg einzigartig halten müssen. Deshalb nannten wir unser `data`-Attribut `isDone` anstelle von `done`.

So müssen wir nun die `isDone`-Eigenschaft an unsere Komponente anhängen. In ähnlicher Weise wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Vorlagen anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und -Komponenten zu binden: **`v-bind`**. Der `v-bind`-Ausdruck sieht folgendermaßen aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie setzen das Attribut/Prop, das Sie binden möchten, mit `v-bind:` voran. In den meisten Fällen können Sie eine Kurzschreibweise für die `v-bind`-Eigenschaft verwenden, indem Sie das Attribut/Prop einfach mit einem Doppelpunkt prefixen. Also `:attribute="expression"` funktioniert genauso wie `v-bind:attribute="expression"`.

Im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft dem `checked`-Attribut des `<input>`-Elements zuzuordnen. Beide der folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können das von Ihnen bevorzugte Muster verwenden. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzschreibsyntax häufiger verwendet wird, wird dieses Tutorial an diesem Muster festhalten.

Lassen Sie uns dies tun. Aktualisieren Sie jetzt Ihr `<input>`-Element, um `:checked="isDone"` hinzuzufügen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` an den `ToDoItem`-Aufruf in `App.vue` übergeben. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, da andernfalls `true` als String übergeben wird. Das angezeigte Kontrollkästchen sollte aktiviert sein.

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

Versuchen Sie, `true` in `false` zu ändern und wieder zurück, und laden Sie Ihre App jedes Mal neu, um zu sehen, wie sich der Zustand ändert.

## Zuweisung von eindeutigen IDs zu Aufgaben

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, dessen Zustand wir programmgesteuert festlegen können. Wir können jedoch derzeit nur ein `ToDoList`-Element auf die Seite hinzufügen, da die `id` hartcodiert ist. Das würde zu Fehlern mit unterstützenden Technologien führen, da die `id` benötigt wird, um Labels korrekt mit ihren Kontrollkästchen zu verknüpfen. Um dies zu beheben, können wir die `id` programmgesteuert in den Komponentendaten festlegen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um eine eindeutige Zeichenkette zu generieren, um die IDs der Komponenten eindeutig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine unkomplizierte Möglichkeit, die Eindeutigkeit zu gewährleisten, ohne sich auf externe Bibliotheken zu verlassen.

Fügen Sie als Nächstes ein `id`-Feld zur `data`-Eigenschaft hinzu, wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenkette zurückzugeben, die wir dann mit `todo-` voranstellen:

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

Binden Sie als Nächstes die `id` sowohl an das `id`-Attribut des Kontrollkästchens als auch an das `for`-Attribut des Labels, indem Sie die vorhandenen `id`- und `for`-Attribute wie gezeigt aktualisieren:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Und das war es für diesen Artikel. An dieser Stelle haben wir eine schön funktionierende `ToDoItem`-Komponente, der ein Label zur Anzeige übergeben werden kann, den aktivierten Zustand speichert und bei jedem Aufruf mit einer eindeutigen ID gerendert wird. Sie können überprüfen, ob die eindeutigen IDs funktionieren, indem Sie vorübergehend weitere `<to-do-item></to-do-item>`-Aufrufe in `App.vue` einfügen und dann deren gerenderte Ausgabe mit den DevTools Ihres Browsers überprüfen.

Jetzt sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. Im nächsten Artikel werden wir untersuchen, wie wir eine Reihe von Aufgabenpunkt-Daten zu unserer `App.vue`-Komponente hinzufügen, die wir dann durchlaufen und in `ToDoItem`-Komponenten mithilfe der `v-for`-Direktive anzeigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
