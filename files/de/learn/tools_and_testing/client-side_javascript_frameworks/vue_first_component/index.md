---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
l10n:
  sourceCommit: 7347dcddbde0fde17a8337bd5be0fd35996060e5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen — wir beginnen mit der Erstellung einer Komponente, die jedes Element in der Aufgabenliste darstellt. Dabei werden wir einige wichtige Konzepte kennenlernen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an diese über Props und das Speichern des Datenzustands.

> [!NOTE]
> Falls Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine vollständige Version des Beispiel-Vue-App-Codes in unserem [todo-vue Repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version sehen Sie unter <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, sowie Wissen über den
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Command Line</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur entspricht. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit
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
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man eine Vue-Komponente erstellt, sie innerhalb einer anderen Komponente rendert, Daten mit Props hinein übergibt und ihren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellung einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes Aufgaben-Element anzeigt. Wir werden dies verwenden, um unsere Liste der Aufgaben zu erstellen.

1. Erstellen Sie im Verzeichnis `moz-todo-vue/src/components` eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Vorlagenabschnitt der Komponente, indem Sie `<template></template>` oben in die Datei einfügen.
3. Erstellen Sie einen `<script></script>`-Abschnitt unter Ihrem Vorlagenabschnitt. Fügen Sie innerhalb der `<script>`-Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, welches Ihr Komponenten-Objekt ist.

Ihre Datei sollte nun folgendermaßen aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können nun beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Vorlagen dürfen derzeit nur ein einziges Wurzelelement haben — ein Element muss alles im Vorlagenabschnitt umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden dafür ein [`<div>`](/de/docs/Web/HTML/Element/div) als Wurzelelement.

1. Fügen Sie jetzt ein leeres `<div>` in Ihre Komponentenvorlage hinzu.
2. Fügen Sie innerhalb dieses `<div>` ein Kontrollkästchen und ein entsprechendes Label hinzu. Weisen Sie dem Kontrollkästchen eine `id` zu und einen `for`-Attribut zu, das das Kontrollkästchen mit dem Label verknüpft, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwendung von TodoItem innerhalb unserer App

Das ist alles in Ordnung, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, also gibt es keine Möglichkeit, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns das jetzt hinzufügen.

1. Öffnen Sie erneut `App.vue`.
2. Fügen Sie am Anfang des `<script>`-Tags folgendes hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie in Ihrem Komponenten-Objekt die `components`-Eigenschaft hinzu und darin Ihre `ToDoItem`-Komponente, um sie zu registrieren.

Ihr `<script>`-Inhalt sollte jetzt folgendermaßen aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist der gleiche Weg, wie die `HelloWorld`-Komponente zuvor vom Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>`-Element gehen und es als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponenten-Dateiname und die Darstellung in JavaScript im PascalCase (z.B. `ToDoList`) sind, und das entsprechende benutzerdefinierte Element im [kebab-case](/de/docs/Glossary/kebab_case) (z.B. `<to-do-list>`).
Es ist notwendig, diesen Schreibstil zu verwenden, wenn Sie Vue-Vorlagen [direkt im DOM schreiben](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats).

1. Erstellen Sie unterhalb des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Element/ul)), die ein einzelnes Listenelement ([`<li>`](/de/docs/Web/HTML/Element/li)) enthält.
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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie jetzt Ihr gerendertes `ToDoItem` sehen, das aus einem Kontrollkästchen und einem Label besteht.

![Der aktuelle Rendering-Zustand der App, der einen Titel der To-Do-Liste und ein einziges Kontrollkästchen und Label enthält](rendered-todoitem.png)

## Dynamische Komponenten mit Props erstellen

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, weil wir sie wirklich nur einmal auf einer Seite einfügen können (IDs müssen eindeutig sein) und wir haben keine Möglichkeit, den Label-Text festzulegen. Nichts davon ist dynamisch.

Was wir brauchen, ist ein gewisser Komponenten-Zustand. Dies kann erreicht werden, indem man Props zu unserer Komponente hinzufügt. Sie können Props ähnlich wie Eingaben in eine Funktion betrachten. Der Wert einer Prop gibt Komponenten einen Anfangszustand, der ihre Anzeige beeinflusst.

### Registrierung von Props

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit besteht darin, Props einfach als ein Array von Zeichenfolgen aufzulisten. Jeder Eintrag im Array entspricht dem Namen einer Prop.
- Die zweite Möglichkeit besteht darin, Props als Objekt zu definieren, wobei jeder Schlüssel dem Prop-Namen entspricht. Das Auflisten von Props als ein Objekt ermöglicht es Ihnen, Standardwerte festzulegen, Props als erforderlich zu markieren, grundlegende Objekt-Typisierung durchzuführen (insbesondere bei JavaScript-Primitive-Typen) und einfache Prop-Validierung vorzunehmen.

> [!NOTE]
> Die Prop-Validierung erfolgt nur im Entwicklungsmodus, sodass Sie sich im Produktionsmodus nicht strikt darauf verlassen können. Darüber hinaus werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere Props) haben.

Für diese Komponente werden wir die Objektregistrierungsmethode verwenden.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue`-Datei.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des Exports `default {}`-Objekts hinzu, die ein leeres Objekt enthält.
3. Fügen Sie innerhalb dieses Objekts zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der Wert des `label`-Schlüssels sollte ein Objekt mit 2 Eigenschaften sein (oder **Props**, wie sie im Kontext der Verfügbarmachung für die Komponenten genannt werden).

   1. Die erste ist eine `required`-Eigenschaft, die den Wert `true` hat. Dies wird Vue mitteilen, dass wir erwarten, dass jede Instanz dieser Komponente ein Label-Feld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen werden, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft als den JavaScript `String`-Typ (achten Sie auf das große "S"). Dies teilt Vue mit, dass wir erwarten, dass der Wert dieser Eigenschaft eine Zeichenfolge ist.

5. Nun zur `done`-Prop.

   1. Fügen Sie zuerst ein `default`-Feld mit dem Wert `false` hinzu. Dies bedeutet, dass wenn keine `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, die `done`-Prop den Wert false hat (denken Sie daran, dass dies nicht erforderlich ist — wir benötigen `default` nur für nicht erforderliche Props).
   2. Fügen Sie als Nächstes ein `type`-Feld mit dem Wert `Boolean` hinzu. Das teilt Vue mit, dass wir erwarten, dass der Wert der Prop ein JavaScript-Boolescher Typ ist.

Ihr Komponenten-Objekt sollte jetzt so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwendung von registrierten Props

Mit diesen innerhalb des Komponenten-Objekts definierten Props können wir diese Variablenwerte in unserer Vorlage verwenden. Fangen wir an, die `label`-Prop in die Komponentenvorlage einzufügen.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Vorlagensyntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, innerhalb unserer Vorlage auszugeben, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass Inhalt innerhalb von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall geben wir den Wert der `label`-Prop aus.

Der Vorlagenabschnitt Ihrer Komponente sollte jetzt so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie werden sehen, dass das Aufgaben-Element wie zuvor gerendert wird, jedoch ohne ein Label (oh nein!). Gehen Sie zu Ihren Entwicklertools des Browsers und Sie werden eine Warnung in der Konsole sehen, die etwa so lautet:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderliche Prop markiert haben, aber wir haben der Komponente nie diese Prop gegeben — wir haben definiert, wo wir sie innerhalb der Vorlage verwenden möchten, aber wir haben sie nicht in die Komponente übergeben, wenn wir sie aufgerufen haben. Lassen Sie uns das beheben.

Fügen Sie in Ihrer `App.vue`-Datei eine `label`-Prop in die `<to-do-item></to-do-item>`-Komponente ein, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt werden Sie das Label in Ihrer App sehen und die Warnung wird nicht mehr in der Konsole ausgegeben.

Das sind also Props in aller Kürze. Als Nächstes gehen wir darauf ein, wie Vue den Datenzustand beibehält.

## Das Datenobjekt von Vue

Wenn Sie den Wert der `label`-Prop, die in den `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente übergeben wird, ändern, sollten Sie sehen, wie sie aktualisiert wird. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Wir tun jedoch derzeit nichts mit der "done"-Prop — wir können die Kontrollkästchen in der Benutzeroberfläche ankreuzen, aber nirgends in der App zeichnen wir auf, ob ein Aufgaben-Element tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir die `done`-Prop der Komponente an das `checked`-Attribut des [`<input>`](/de/docs/Web/HTML/Element/input)-Elements binden, sodass es als Aufzeichnung dafür dienen kann, ob das Kontrollkästchen angekreuzt ist oder nicht. Es ist jedoch wichtig, dass Props als unidirektionale Datenbindung dienen — eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Dafür gibt es viele Gründe. Zum Teil kann das Bearbeiten von Props in Komponenten das Debuggen erschweren. Wenn ein Wert an mehrere Kinder weitergegeben wird, könnte es schwierig sein, nachzuverfolgen, woher die Änderungen an diesem Wert stammen. Außerdem kann das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. Das Mutieren von Props in einer Komponente würde also das Neurendern der Komponente auslösen, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done`-Zustand mit der `data`-Eigenschaft von Vue verwalten. Die `data`-Eigenschaft ist der Ort, an dem Sie lokalen Zustand in einer Komponente verwalten können. Die `data`-Eigenschaft befindet sich innerhalb des Komponenten-Objekts neben den `props`-Eigenschaften und hat die folgende Struktur:

```js
data() {
  return {
    key: value
  }
}
```

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies dient dazu, die Datenwerte für jede Instanz einer Komponente zur Laufzeit einzigartig zu halten — die Funktion wird für jede Komponentinstanz separat aufgerufen. Wenn Sie `data` einfach als ein Objekt deklarieren, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist eine Folge der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht wollen.

Sie verwenden `this`, um von innerhalb der Daten auf die Props und andere Eigenschaften einer Komponente zuzugreifen, wie Sie es vielleicht erwarten. Wir werden kurz ein Beispiel dafür sehen.

> [!NOTE]
> Aufgrund der Art und Weise, wie `this` in Pfeilfunktionen funktioniert (Bindung an den Kontext des Elternteils), können Sie von innerhalb von `data` nicht auf die erforderlichen Attribute zugreifen, wenn Sie eine Pfeilfunktion verwenden. Verwenden Sie daher keine Pfeilfunktion für die Eigenschaft `data`.

Lassen Sie uns also eine `data`-Eigenschaft zu unserer `ToDoItem`-Komponente hinzufügen. Dies wird ein Objekt zurückgeben, das eine einzelne Eigenschaft enthält, die wir `isDone` nennen werden, deren Wert `this.done` ist.

Aktualisieren Sie das Komponenten-Objekt wie folgt:

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

Vue macht hier ein wenig Magie — es bindet alle Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, das Sie bereits gesehen haben, und andere wie `methods`, `computed`, etc.) direkt an die Instanz. Dies geschieht teilweise, um sie Ihrer Vorlage verfügbar zu machen. Der Nachteil davon ist, dass Sie die Schlüssel über diese Attribute hinweg einzigartig halten müssen. Aus diesem Grund nannten wir unser `data`-Attribut `isDone` statt `done`.

Jetzt müssen wir die `isDone`-Eigenschaft an unsere Komponente anbringen. In ähnlicher Weise, wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Vorlagen anzuzeigen, hat Vue eine spezielle Syntax zum Binden von JavaScript-Ausdrücken an HTML-Elemente und Komponenten: **`v-bind`**. Der `v-bind`-Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie präfixen das Attribut/Prop, das Sie binden möchten, mit `v-bind:`. In den meisten Fällen können Sie eine Kurzform für die `v-bind`-Eigenschaft verwenden, indem Sie das Attribut/Prop einfach mit einem Doppelpunkt präfixen. Also funktioniert `:attribute="expression"` genauso wie `v-bind:attribute="expression"`.

Im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft dem `checked`-Attribut auf dem `<input>`-Element zuzuordnen. Beide der folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Es steht Ihnen frei, welches Muster Sie verwenden möchten. Es ist jedoch am besten, es konsistent zu halten. Da die Kurzformsyntax häufiger verwendet wird, wird dieses Tutorial bei diesem Muster bleiben.

Lassen Sie uns das nun tun. Aktualisieren Sie Ihr `<input>`-Element jetzt, um `:checked="isDone"` einzuschließen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` zum `ToDoItem`-Aufruf in `App.vue` hinzufügen. Beachten Sie, dass Sie die `v-bind`-Syntax verwenden müssen, da andernfalls `true` als Zeichenfolge übergeben wird. Das angezeigte Kontrollkästchen sollte angekreuzt sein.

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

Versuchen Sie, `true` in `false` und wieder zurück zu ändern und laden Sie Ihre App dazwischen neu, um zu sehen, wie sich der Zustand ändert.

## Todos eine eindeutige ID geben

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Zustand programmgesteuert setzen können. Wir können jedoch derzeit nur eine `ToDoList`-Komponente auf die Seite hinzufügen, da die `id` fest codiert ist. Dies würde zu Fehlern mit unterstützenden Technologien führen, da die `id` notwendig ist, um Labels korrekt den Kontrollkästen zuzuordnen. Um dies zu beheben, können wir die `id` im Komponentendaten programmatisch festlegen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um eine eindeutige Zeichenfolge zu generieren, um die `id`s der Komponenten einzigartig zu halten. `randomUUID()` ist in modernen Browsern integriert und bietet eine einfache Möglichkeit, Einzigartigkeit sicherzustellen, ohne auf externe Bibliotheken angewiesen zu sein.

Fügen Sie als Nächstes ein `id`-Feld zu der `data`-Eigenschaft hinzu, wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenfolge zurückzugeben, die wir dann mit `todo-` voranstellen:

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

Damit wären wir für diesen Artikel fertig. Zu diesem Zeitpunkt haben wir eine gut funktionierende `ToDoItem`-Komponente, die ein anzuzeigendes Label erhalten kann, ihren angekreuzten Zustand speichert und mit einer eindeutigen `id` jedes Mal gerendert wird, wenn sie aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend weitere `<to-do-item></to-do-item>`-Aufrufe in `App.vue` hinzufügen und dann deren gerenderte Ausgabe mit den Entwicklertools Ihres Browsers überprüfen.

Nun sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. In unserem nächsten Artikel werden wir darauf eingehen, wie man eine Reihe von Aufgaben-Daten zu unserer `App.vue`-Komponente hinzufügt, die wir dann durchlaufen und innerhalb von `ToDoItem`-Komponenten unter Verwendung der `v-for`-Direktive anzeigen werden.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
