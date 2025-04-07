---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn_web_development/Core/Frameworks_libraries/Vue_first_component
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}

Nun ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen. Wir beginnen damit, eine Komponente zu erstellen, die jedes Element in der Todo-Liste darstellt. Dabei lernen wir einige wichtige Konzepte wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an sie über `props` und das Speichern des Datenzustands.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen möchten, finden Sie eine fertige Version der Beispiel-Vue-App im [todo-vue repository](https://github.com/mdn/todo-vue). Für eine laufende Live-Version siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen,
          Kenntnisse über das
          <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Command Line</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Render-Funktionen), benötigen Sie ein Terminal mit
          <a href="https://nodejs.org/en/download" rel="noopener noreferrer" target="_blank">Node</a>
          und
          <a href="https://www.npmjs.com/get-npm" rel="noopener noreferrer" target="_blank">npm</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine Vue-Komponente erstellt, sie in eine andere Komponente rendert, Daten mit `props` in sie übergibt und deren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die einen einzelnen Todo-Artikel anzeigt. Wir werden dies verwenden, um unsere Liste von Todos aufzubauen.

1. Erstellen Sie im Verzeichnis `moz-todo-vue/src/components` eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Templateabschnitt der Komponente, indem Sie `<template></template>` oben in der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>`-Abschnitt unterhalb Ihres Templateabschnitts. Fügen Sie innerhalb der `<script>`-Tags ein Standard exportiertes Objekt `export default {}` hinzu, das Ihr Komponentenobjekt ist.

Ihre Datei sollte nun so aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Wir können jetzt anfangen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Templates erlauben derzeit nur ein einziges Root-Element – ein Element muss alles innerhalb des Templateabschnitts umschließen (dies wird sich mit Erscheinen von Vue 3 ändern). Wir verwenden dafür ein [`<div>`](/de/docs/Web/HTML/Element/div) als Root-Element.

1. Fügen Sie jetzt ein leeres `<div>` innerhalb Ihres Komponententemplates hinzu.
2. Fügen Sie ein Kontrollkästchen und ein entsprechendes Label innerhalb dieses `<div>` hinzu. Fügen Sie dem Kontrollkästchen eine `id` hinzu und ein `for`-Attribut, das das Kontrollkästchen dem Label zuordnet, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwendung von TodoItem innerhalb unserer App

Das ist alles gut, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, sodass es keine Möglichkeit gibt, sie zu testen und zu überprüfen, ob alles funktioniert. Fügen wir sie jetzt hinzu.

1. Öffnen Sie `App.vue` erneut.
2. Fügen Sie oben in Ihrem `<script>`-Tag Folgendes hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie innerhalb Ihres Komponentenobjekts die Eigenschaft `components` hinzu und registrieren Sie darin Ihre `ToDoItem`-Komponente.

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

Dies ist der gleiche Weg, auf dem die `HelloWorld`-Komponente zuvor vom Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>`-Element gehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponenten-Dateiname und seine Darstellung in JavaScript in PascalCase ist (z. B. `ToDoList`) und das entsprechende benutzerdefinierte Element in {{Glossary("kebab_case", "kebab-case")}} (z. B. `<to-do-list>`).
Es ist notwendig, diesen Schreibstil zu verwenden, wenn Sie Vue-Templates [direkt im DOM schreiben](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats).

1. Erstellen Sie unterhalb des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Element/ul)) mit einem einzigen Listenelement ([`<li>`](/de/docs/Web/HTML/Element/li)).
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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie nun Ihre gerenderte `ToDoItem` sehen, bestehend aus einem Kontrollkästchen und einem Label.

![Der aktuelle Rendering-Zustand der App, der einen Titel der To-Do-Liste und ein einzelnes Kontrollkästchen sowie ein Label enthält](rendered-todoitem.png)

## Komponenten dynamisch mit Props machen

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, weil wir sie eigentlich nur einmal auf einer Seite einfügen können (IDs müssen eindeutig sein) und wir keine Möglichkeit haben, den Label-Text festzulegen. Nichts davon ist dynamisch.

Was wir brauchen, sind einige Komponentenstatus. Dies kann erreicht werden, indem `props` zu unserer Komponente hinzugefügt werden. Sie können `props` als ähnlich zu Eingaben in einer Funktion betrachten. Der Wert eines `prop` gibt Komponenten einen Anfangszustand, der ihre Anzeige beeinflusst.

### Registrieren von Props

In Vue gibt es zwei Möglichkeiten, `props` zu registrieren:

- Die erste Methode ist, `props` einfach als ein Array von Strings aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines `prop`.
- Die zweite Methode ist, `props` als Objekt zu definieren, wobei jeder Schlüssel dem `prop`-Namen entspricht. Das Auflisten von `props` als Objekt ermöglicht es Ihnen, Standardwerte anzugeben, `props` als erforderlich zu kennzeichnen, einfache Objekttypisierung durchzuführen (insbesondere in Bezug auf primitive JavaScript-Typen) und einfache `prop`-Validierung durchzuführen.

> [!NOTE]
> Die `prop`-Validierung erfolgt nur im Entwicklungsmodus, daher können Sie sich in der Produktion nicht strikt darauf verlassen. Darüber hinaus werden `prop`-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponentenstatus (oder andere `props`) haben.

Für diese Komponente verwenden wir die Objektregistrierungsmethode.

1. Gehen Sie zurück zu Ihrer Datei `ToDoItem.vue`.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des Exports `default {}` Objekts hinzu, die ein leeres Objekt enthält.
3. Fügen Sie innerhalb dieses Objekts zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der `label`-Schlüssel sollte ein Objekt mit 2 Eigenschaften (oder **`props`**, wie sie im Kontext verfügbarer Komponenten genannt werden) haben.

   1. Die erste ist eine `required`-Eigenschaft, die den Wert `true` hat. Dies teilt Vue mit, dass wir erwarten, dass jede Instanz dieser Komponente ein Labelfeld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Labelfeld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft als JavaScript-Typ `String` (beachten Sie das große "S"). Dies teilt Vue mit, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Jetzt zur `done`-Prop.

   1. Fügen Sie zuerst ein `default`-Feld hinzu, mit einem Wert von `false`. Dies bedeutet, dass wenn keine `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, die `done`-Prop den Wert false hat (denken Sie daran, dass dies nicht erforderlich ist - wir benötigen `default` nur für nicht erforderliche `props`).
   2. Fügen Sie als Nächstes ein `type`-Feld mit einem Wert `Boolean` hinzu. Dies teilt Vue mit, dass wir erwarten, dass der Wert `prop` ein JavaScript `Boolean`-Typ ist.

Ihr Komponentenobjekt sollte jetzt so aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Verwendung registrierter Props

Mit diesen `props`, die innerhalb des Komponentenobjekts definiert sind, können wir diese Variablenwerte jetzt innerhalb unseres Templates verwenden. Lassen Sie uns mit dem Hinzufügen des `label`-`prop` zur Komponentenvorlage beginnen.

Ersetzen Sie in Ihrem `<template>` den Inhalt des `<label>`-Elements durch `\{{label}}`.

`\{{}}` ist eine spezielle Templatesyntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, in unserem Template anzuzeigen, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass der Inhalt innerhalb von `\{{}}` als Text und nicht als HTML angezeigt wird. In diesem Fall geben wir den Wert des `label`-`prop` aus.

Der Templateabschnitt Ihrer Komponente sollte nun so aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie sehen das gerenderte Todo-Element wie zuvor, aber ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie sehen eine Warnung in dieser Art in der Konsole:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Das liegt daran, dass wir das `label` als erforderliches `prop` markiert haben, aber wir haben diesem `prop` nie der Komponente gegeben – wir haben definiert, wo wir es in der Vorlage verwenden wollen, aber wir haben es nicht der Komponente übergeben, wenn wir sie aufrufen. Lassen Sie uns das beheben.

Fügen Sie Ihrer `App.vue`-Datei ein `label`-Prop zum `<to-do-item></to-do-item>`-Element hinzu, so wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Nun sehen Sie das Label in Ihrer App, und die Warnung wird nicht mehr in der Konsole ausgegeben.

Das sind `props` im Wesentlichen. Als nächstes gehen wir darauf ein, wie Vue den Datenstatus speichert.

## Das Datenobjekt von Vue

Wenn Sie den Wert des `label`-Props ändern, der in den `<to-do-item></to-do-item>`-Aufruf in Ihrer `App`-Komponente übergeben wird, sollten Sie es aktualisiert sehen. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Derzeit machen wir jedoch nichts mit dem "done"-Prop - wir können die Kontrollkästchen im UI markieren, aber nirgends in der App zeichnen wir auf, ob ein To-do-Element tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir das `done`-Prop der Komponente an das `checked`-Attribut des [`<input>`](/de/docs/Web/HTML/Element/input)-Elements binden, sodass es als Nachweis dafür dienen kann, ob das Kontrollkästchen aktiviert ist oder nicht. Es ist jedoch wichtig, dass `props` als unidirektionale Datenbindung dienen - eine Komponente sollte niemals den Wert ihrer eigenen `props` ändern. Dafür gibt es viele Gründe. Zum Teil können das Bearbeiten von `props` in Komponenten das Debuggen erschweren. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein nachzuvollziehen, woher die Änderungen dieses Wertes kommen. Darüber hinaus kann das Ändern von `props` dazu führen, dass Komponenten neu gerendert werden. Das mutierende `props` in einer Komponente würde das Komponentenrendering auslösen, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir die `done`-State mit der `data`-Eigenschaft von Vue verwalten. Die `data`-Eigenschaft ist der Punkt, an dem Sie lokale Zustände in einer Komponente verwalten können. Sie befindet sich innerhalb des Komponentenobjekts neben der `props`-Eigenschaft und hat die folgende Struktur:

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

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies ist notwendig, um die Datenwerte für jede Instanz einer Komponente zur Laufzeit eindeutig zu halten – die Funktion wird für jede Komponenteninstanz separat aufgerufen. Wenn Sie Daten lediglich als ein Objekt deklarierten, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist ein Nebeneffekt der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht wollen.

In `data` verwenden Sie `this`, um auf die `props` und andere Eigenschaften einer Komponente zuzugreifen, so wie Sie es erwarten würden. Wir werden gleich ein Beispiel dafür sehen.

> [!NOTE]
> Aufgrund der Art und Weise, wie `this` in Pfeilfunktionen (Binden an den Kontext des Elternteils) funktioniert, könnten Sie von innerhalb `data` nicht auf notwendige Attribute zugreifen, wenn Sie eine Pfeilfunktion verwenden. Verwenden Sie also keine Pfeilfunktion für die `data`-Eigenschaft.

Daher sollten wir eine `data`-Eigenschaft zu unserer `ToDoItem`-Komponente hinzufügen, die ein Objekt mit einer einzigen Eigenschaft zurückgibt, die wir `isDone` nennen, deren Wert `this.done` ist.

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

Vue führt hier ein wenig Magie aus – es bindet alle Ihre `props` direkt an die Komponenteninstanz, so dass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute ( `data`, das Sie bereits gesehen haben, sowie andere wie `methods`, `computed` usw.) direkt an die Instanz. Dies ist teilweise der Fall, um sie Ihrem Template verfügbar zu machen. Der Nachteil davon ist, dass Sie die Schlüssel eindeutig über diese Attribute beibehalten müssen. Aus diesem Grund nannten wir unser Datenattribut `isDone` anstatt `done`.

Jetzt müssen wir die `isDone`-Eigenschaft an unsere Komponente anhängen. In ähnlicher Weise, wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Vorlagen anzuzeigen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und Komponenten zu binden: **`v-bind`**. Der `v-bind`-Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Anders ausgedrückt, Sie präfixen das Attribut/Prop, das Sie binden möchten, mit `v-bind:`. In den meisten Fällen können Sie eine Verkürzung für die `v-bind`-Eigenschaft verwenden, indem Sie einfach das Attribut/Prop mit einem Doppelpunkt voranstellen. So funktioniert `:attribute="expression"` genauso wie `v-bind:attribute="expression"`.

In Bezug auf das Kontrollkästchen in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft an das `checked`-Attribut auf dem `<input>`-Element zu binden. Beide der folgenden sind äquivalent:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können das Muster verwenden, das Sie bevorzugen. Es ist jedoch am besten, konsistent zu bleiben. Da die abgeschnittene Syntax häufiger verwendet wird, bleibt dieses Tutorial bei diesem Muster.

Lassen Sie uns dies jetzt in unserer `<input>`-Element aktualisieren, um `:checked="isDone"` hinzuzufügen.

Testen Sie Ihre Komponente, indem Sie `:done="true"` an den `ToDoItem`-Aufruf in `App.vue` übergeben. Beachten Sie, dass die `v-bind`-Syntax verwendet werden muss, da sonst `true` als String übergeben wird. Das angezeigte Kontrollkästchen sollte aktiviert sein.

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

Versuchen Sie, `true` auf `false` zu ändern und wieder zurück, und laden Sie Ihre App dazwischen, um zu sehen, wie sich der Status ändert.

## Todos eine eindeutige id geben

Großartig! Wir haben jetzt ein funktionierendes Kontrollkästchen, bei dem wir den Zustand programmatisch setzen können. Derzeit können wir jedoch nur ein `ToDoList`-Element auf die Seite hinzufügen, da die `id` fest kodiert ist. Dies würde zu Fehlern mit unterstützenden Technologien führen, da die `id` erforderlich ist, um die Labels korrekt den Kontrollkästchen zuzuordnen. Um dies zu beheben, können wir die `id` im Komponentendaten programmatisch setzen.

Wir können die Methode [`Crypto.randomUUID()`](/de/docs/Web/API/Crypto/randomUUID) verwenden, um eine eindeutige Zeichenkette zu generieren, um Komponentensymbole eindeutig zu halten. `randomUUID()` ist in modernen Browsern integriert und bietet eine unkomplizierte Möglichkeit, Eindeutigkeit sicherzustellen, ohne dass externe Bibliotheken erforderlich sind.

Fügen Sie als Nächstes ein `id`-Feld zur `data`-Eigenschaft hinzu, wie unten gezeigt; dies verwendet `crypto.randomUUID()`, um eine eindeutige Zeichenkette zu erhalten, die wir dann mit `todo-` präfixen:

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

Binden Sie als Nächstes die `id` sowohl an das `id`-Attribut unseres Kontrollkästchens als auch an das `for`-Attribut des Labels, und aktualisieren Sie die vorhandenen `id`- und `for`-Attribute wie gezeigt:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Und das war's für diesen Artikel. An diesem Punkt haben wir eine gut funktionierende `ToDoItem`-Komponente, die ein anzuzeigendes Label erhalten kann, ihren geprüften Zustand speichert und jedes Mal, wenn sie aufgerufen wird, mit einer eindeutigen `id` gerendert wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend mehr `<to-do-item></to-do-item>`-Aufrufe in `App.vue` hinzufügen und dann ihre gerenderten Ausgaben mit den DevTools Ihres Browsers überprüfen.

Jetzt sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. Im nächsten Artikel werden wir uns damit befassen, ein Set von Todo-Element-Daten zu unserer `App.vue`-Komponente hinzuzufügen, die wir dann durchlaufen und in `ToDoItem`-Komponenten mithilfe der `v-for`-Direktive anzeigen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/Vue_getting_started","Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists", "Learn_web_development/Core/Frameworks_libraries")}}
