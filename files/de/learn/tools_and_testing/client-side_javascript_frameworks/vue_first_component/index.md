---
title: Erstellen unserer ersten Vue-Komponente
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component
l10n:
  sourceCommit: 7347dcddbde0fde17a8337bd5be0fd35996060e5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jetzt ist es an der Zeit, tiefer in Vue einzutauchen und unsere eigene benutzerdefinierte Komponente zu erstellen – wir beginnen mit der Erstellung einer Komponente, die jedes Element der To-Do-Liste darstellt. Dabei lernen wir einige wichtige Konzepte kennen, wie das Aufrufen von Komponenten innerhalb anderer Komponenten, das Übergeben von Daten an diese über Props und das Speichern von Datenzuständen.

> [!NOTE]
> Wenn Sie Ihren Code mit unserer Version vergleichen müssen, finden Sie eine fertige Version des Beispiel-Vue-App-Codes in unserem [todo-vue repository](https://github.com/mdn/todo-vue). Für eine live laufende Version siehe <https://mdn.github.io/todo-vue/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnis der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeilenumgebung</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und um einige der fortgeschritteneren Funktionen von Vue zu nutzen (wie Single File Components oder Renderfunktionen), benötigen Sie ein Terminal mit
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
        Lernen, wie man eine Vue-Komponente erstellt, diese innerhalb einer anderen Komponente rendert, Daten über Props übergibt und deren Zustand speichert.
      </td>
    </tr>
  </tbody>
</table>

## Erstellen einer ToDoItem-Komponente

Lassen Sie uns unsere erste Komponente erstellen, die ein einzelnes To-Do-Element anzeigt. Diese verwenden wir, um unsere Liste von To-Dos zu erstellen.

1. Erstellen Sie in Ihrem Verzeichnis `moz-todo-vue/src/components` eine neue Datei mit dem Namen `ToDoItem.vue`. Öffnen Sie die Datei in Ihrem Code-Editor.
2. Erstellen Sie den Template-Abschnitt der Komponente, indem Sie `<template></template>` an den Anfang der Datei hinzufügen.
3. Erstellen Sie einen `<script></script>`-Abschnitt unterhalb Ihres Template-Abschnitts. Fügen Sie innerhalb der `<script>`-Tags ein standardmäßig exportiertes Objekt `export default {}` hinzu, das Ihr Komponentenobjekt ist.

Ihre Datei sollte nun wie folgt aussehen:

```vue
<template></template>
<script>
export default {};
</script>
```

Nun können wir beginnen, tatsächlichen Inhalt zu unserem `ToDoItem` hinzuzufügen. Vue-Templates sind derzeit nur auf ein einzelnes Root-Element beschränkt – ein Element muss alles innerhalb des Template-Abschnitts umschließen (dies wird sich ändern, wenn Vue 3 herauskommt). Wir verwenden ein [`<div>`](/de/docs/Web/HTML/Element/div) für dieses Root-Element.

1. Fügen Sie jetzt ein leeres `<div>` in Ihr Komponententemplate ein.
2. Fügen Sie innerhalb dieses `<div>` ein Kontrollkästchen und ein entsprechendes Label hinzu. Fügen Sie dem Kontrollkästchen eine `id` hinzu und eine `for`-Attribut, das das Kontrollkästchen mit dem Label verknüpft, wie unten gezeigt.

   ```vue
   <template>
     <div>
       <input type="checkbox" id="todo-item" />
       <label for="todo-item">My Todo Item</label>
     </div>
   </template>
   ```

### Verwendung von TodoItem in unserer App

Das alles ist in Ordnung, aber wir haben die Komponente noch nicht zu unserer App hinzugefügt, also gibt es keine Möglichkeit, sie zu testen und zu sehen, ob alles funktioniert. Lassen Sie uns das jetzt tun.

1. Öffnen Sie erneut `App.vue`.
2. Fügen Sie am Anfang Ihres `<script>`-Tags Folgendes hinzu, um Ihre `ToDoItem`-Komponente zu importieren:

   ```js
   import ToDoItem from "./components/ToDoItem.vue";
   ```

3. Fügen Sie Ihrem Komponentenobjekt die Eigenschaft `components` hinzu und registrieren Sie darin Ihre `ToDoItem`-Komponente.

Ihre `<script>`-Inhalte sollten nun wie folgt aussehen:

```js
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: "app",
  components: {
    ToDoItem,
  },
};
```

Dies ist dieselbe Methode, mit der die `HelloWorld`-Komponente zuvor vom Vue CLI registriert wurde.

Um die `ToDoItem`-Komponente tatsächlich in der App zu rendern, müssen Sie in Ihr `<template>`-Element gehen und sie als `<to-do-item></to-do-item>`-Element aufrufen. Beachten Sie, dass der Komponenten-Dateiname und seine Darstellung in JavaScript im PascalCase sind (z.B. `ToDoList`), und das entsprechende benutzerdefinierte Element im {{Glossary("kebab_case", "Kebab-Case")}} (z.B. `<to-do-list>`).
Diese Schreibweise ist erforderlich, wenn Sie Vue-Templates [direkt im DOM schreiben](https://vuejs.org/guide/essentials/component-basics.html#dom-template-parsing-caveats).

1. Erstellen Sie unterhalb des [`<h1>`](/de/docs/Web/HTML/Element/Heading_Elements) eine ungeordnete Liste ([`<ul>`](/de/docs/Web/HTML/Element/ul)), die ein einzelnes Listenelement ([`<li>`](/de/docs/Web/HTML/Element/li)) enthält.
2. Fügen Sie innerhalb des Listenelements `<to-do-item></to-do-item>` hinzu.

Der `<template>`-Abschnitt Ihrer `App.vue`-Datei sollte nun etwa wie folgt aussehen:

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

Wenn Sie Ihre gerenderte App erneut überprüfen, sollten Sie jetzt Ihr gerendertes `ToDoItem` sehen, bestehend aus einem Kontrollkästchen und einem Label.

![Der aktuelle Rendering-Zustand der App, der einen Titel der To-Do-Liste und ein einzelnes Kontrollkästchen und Label enthält](rendered-todoitem.png)

## Komponenten dynamisch mit Props machen

Unsere `ToDoItem`-Komponente ist immer noch nicht sehr nützlich, da wir diese nur einmal auf einer Seite einfügen können (IDs müssen eindeutig sein), und wir haben keine Möglichkeit, den Labeltext festzulegen. Nichts daran ist dynamisch.

Was wir brauchen, ist ein gewisser Komponentenstatus. Dies kann erreicht werden, indem wir Props zu unserer Komponente hinzufügen. Sie können Props ähnlich wie Eingaben in eine Funktion betrachten. Der Wert eines Props gibt den Komponenten einen Anfangsstatus, der ihre Anzeige beeinflusst.

### Props registrieren

In Vue gibt es zwei Möglichkeiten, Props zu registrieren:

- Die erste Möglichkeit ist, Props einfach als Array von Strings aufzulisten. Jeder Eintrag im Array entspricht dem Namen eines Props.
- Die zweite Möglichkeit besteht darin, Props als Objekt zu definieren, wobei jeder Schlüssel dem Namen des Props entspricht. Das Auflisten von Props als Objekt ermöglicht es Ihnen, Standardwerte festzulegen, Props als erforderlich zu markieren, grundlegendes Objekt-Typing (insbesondere in Bezug auf JavaScript-Primitive-Typen) durchzuführen und eine einfache Prop-Validierung vorzunehmen.

> [!NOTE]
> Prop-Validierung erfolgt nur im Entwicklungsmodus, so dass Sie sich in der Produktion nicht strikt darauf verlassen können. Darüber hinaus werden Prop-Validierungsfunktionen aufgerufen, bevor die Komponenteninstanz erstellt wird, sodass sie keinen Zugriff auf den Komponenten-Status (oder andere Props) haben.

Für diese Komponente verwenden wir die Objekt-Registrierungsmethode.

1. Gehen Sie zurück zu Ihrer `ToDoItem.vue`-Datei.
2. Fügen Sie eine `props`-Eigenschaft innerhalb des exportieren `default {}`-Objekts hinzu, die ein leeres Objekt enthält.
3. Fügen Sie innerhalb dieses Objekts zwei Eigenschaften mit den Schlüsseln `label` und `done` hinzu.
4. Der Wert des Schlüssels `label` sollte ein Objekt mit 2 Eigenschaften sein (oder **Props**, wie sie im Kontext von Komponenten genannt werden).

   1. Die erste ist eine `required`-Eigenschaft, die den Wert `true` haben sollte. Dadurch wird Vue mitgeteilt, dass wir erwarten, dass jede Instanz dieser Komponente ein Label-Feld hat. Vue wird uns warnen, wenn eine `ToDoItem`-Komponente kein Label-Feld hat.
   2. Die zweite Eigenschaft, die wir hinzufügen werden, ist eine `type`-Eigenschaft. Setzen Sie den Wert für diese Eigenschaft als den JavaScript `String`-Typ (beachten Sie das große "S"). Dies sagt Vue, dass wir erwarten, dass der Wert dieser Eigenschaft ein String ist.

5. Nun zum `done` Prop.

   1. Fügen Sie zunächst ein `default`-Feld hinzu, mit einem Wert von `false`. Dies bedeutet, dass, wenn kein `done`-Prop an eine `ToDoItem`-Komponente übergeben wird, das `done`-Prop den Wert false haben wird (beachten Sie, dass dies nicht erforderlich ist – wir benötigen nur `default` bei nicht erforderlichen Props).
   2. Fügen Sie dann ein `type`-Feld mit einem Wert von `Boolean` hinzu. Dies sagt Vue, dass wir erwarten, dass der Wert des Props ein JavaScript-Boolescher Typ ist.

Ihr Komponentenobjekt sollte nun wie folgt aussehen:

```js
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
  },
};
```

### Registrierte Props verwenden

Mit diesen in dem Komponentenobjekt definierten Props können wir diese Variablenwerte nun innerhalb unseres Templates verwenden. Beginnen wir damit, das `label`-Prop zum Komponententemplate hinzuzufügen.

Ersetzen Sie in Ihrem `<template>` die Inhalte des `<label>`-Elements mit `\{{label}}`.

`\{{}}` ist eine spezielle Templatesyntax in Vue, die es uns ermöglicht, das Ergebnis von JavaScript-Ausdrücken, die in unserer Klasse definiert sind, innerhalb unseres Templates auszugeben, einschließlich Werten und Methoden. Es ist wichtig zu wissen, dass der Inhalt innerhalb von `\{{}}` als Text und nicht als HTML dargestellt wird. In diesem Fall geben wir den Wert des `label`-Props aus.

Ihr Template-Abschnitt der Komponente sollte jetzt wie folgt aussehen:

```vue
<template>
  <div>
    <input type="checkbox" id="todo-item" />
    <label for="todo-item">\{{ label }}</label>
  </div>
</template>
```

Gehen Sie zurück zu Ihrem Browser und Sie sehen das To-Do-Item gerendert wie zuvor, jedoch ohne Label (oh nein!). Gehen Sie zu den DevTools Ihres Browsers und Sie werden eine Warnung ähnlich dieser in der Konsole sehen:

```plain
[Vue warn]: Missing required prop: "label"

found in

---> <ToDoItem> at src/components/ToDoItem.vue
        <App> at src/App.vue
          <Root>
```

Dies liegt daran, dass wir das `label` als erforderliches Prop markiert haben, aber der Komponente dieses Prop nie gegeben haben – wir haben definiert, wo im Template wir es verwenden möchten, aber wir haben es der Komponente beim Aufruf nicht übergeben. Lassen Sie uns das beheben.

Fügen Sie Ihrem `<to-do-item></to-do-item>`-Komponentenaufruf in der Datei `App.vue` ein `label`-Prop hinzu, genau wie ein reguläres HTML-Attribut:

```vue
<to-do-item label="My ToDo Item"></to-do-item>
```

Jetzt werden Sie das Label in Ihrer App sehen, und die Warnung wird nicht mehr in der Konsole ausgegeben.

Das sind also Props in Kürze. Als Nächstes gehen wir darauf ein, wie Vue den Datenstatus speichert.

## Vue's Datenobjekt

Wenn Sie den Wert des `label`-Props ändern, das in Ihrem `App`-Komponentenaufruf an das `<to-do-item></to-do-item>` übergeben wird, sollten Sie sehen, wie es aktualisiert wird. Das ist großartig. Wir haben ein Kontrollkästchen mit einem aktualisierbaren Label. Momentan machen wir jedoch nichts mit dem "done"-Prop – wir können die Kontrollkästchen in der Benutzeroberfläche aktivieren, aber nirgendwo in der App zeichnen wir auf, ob ein To-Do-Element tatsächlich erledigt ist.

Um dies zu erreichen, möchten wir das `done`-Prop der Komponente an das `checked`-Attribut des [`<input>`](/de/docs/Web/HTML/Element/input)-Elements binden, sodass es als Aufzeichnung dafür dienen kann, ob das Kontrollkästchen aktiviert ist oder nicht. Es ist jedoch wichtig, dass Props als Einweg-Datenbindung dienen – eine Komponente sollte niemals den Wert ihrer eigenen Props ändern. Dafür gibt es viele Gründe. Zum Teil können das Bearbeiten von Props durch Komponenten das Debuggen erschweren. Wenn ein Wert an mehrere Kinder übergeben wird, könnte es schwierig sein, nachzuvollziehen, woher die Änderungen dieses Wertes kommen. Darüber hinaus kann das Ändern von Props dazu führen, dass Komponenten neu gerendert werden. So würde das Mutieren von Props in einer Komponente das Neurendern der Komponente auslösen, was wiederum die Mutation erneut auslösen könnte.

Um dies zu umgehen, können wir den `done`-Status mit der `data`-Eigenschaft von Vue verwalten. Die `data`-Eigenschaft ist der Ort, an dem Sie den lokalen Status in einer Komponente verwalten können; sie befindet sich innerhalb des Komponentenobjekts neben der `props`-Eigenschaft und hat folgende Struktur:

```js
data() {
  return {
    key: value
  }
}
```

Sie werden feststellen, dass die `data`-Eigenschaft eine Funktion ist. Dies dient dazu, die Datenwerte für jede Instanz einer Komponente zur Laufzeit einzigartig zu halten – die Funktion wird für jede Komponenteninstanz separat aufgerufen. Wenn Sie die Daten einfach als ein Objekt deklarieren würden, würden alle Instanzen dieser Komponente dieselben Werte teilen. Dies ist eine Nebeneffekt der Art und Weise, wie Vue Komponenten registriert, und etwas, das Sie nicht wollen.

Sie verwenden `this`, um auf die Props und andere Eigenschaften einer Komponente von innerhalb der Daten zuzugreifen, wie Sie es möglicherweise erwarten. Wir werden dies in Kürze mit einem Beispiel sehen.

> [!NOTE]
> Aufgrund der Funktionsweise von `this` in Pfeilfunktionen (Bindung an den Kontext des Elternteils) könnten Sie von innerhalb der `data`-Funktion aus nicht auf die notwendigen Attribute zugreifen, wenn Sie eine Pfeilfunktion verwenden. Verwenden Sie also keine Pfeilfunktion für die `data`-Eigenschaft.

Lassen Sie uns also die `data`-Eigenschaft zu unserer `ToDoItem`-Komponente hinzufügen. Diese wird ein Objekt zurückgeben, das eine einzige Eigenschaft namens `isDone` enthält, deren Wert `this.done` ist.

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

Vue macht hier ein wenig Magie – es bindet alle Ihre Props direkt an die Komponenteninstanz, sodass wir nicht `this.props.done` aufrufen müssen. Es bindet auch andere Attribute (`data`, die Sie bereits gesehen haben, und andere wie `methods`, `computed`, usw.) direkt an die Instanz. Dies geschieht teilweise, um sie in Ihrem Template verfügbar zu machen. Der Nachteil davon ist, dass Sie die Schlüssel über diese Attribute hinweg eindeutig halten müssen. Dies ist der Grund, warum wir unser `data`-Attribut `isDone` statt `done` genannt haben.

Jetzt müssen wir die `isDone`-Eigenschaft an unsere Komponente anhängen. Auf ähnliche Weise wie Vue `\{{}}`-Ausdrücke verwendet, um JavaScript-Ausdrücke innerhalb von Templates darzustellen, hat Vue eine spezielle Syntax, um JavaScript-Ausdrücke an HTML-Elemente und Komponenten zu binden: **`v-bind`**. Der `v-bind`-Ausdruck sieht so aus:

```plain
v-bind:attribute="expression"
```

Mit anderen Worten, Sie präfixen das Attribut/Prop, das Sie binden möchten, mit `v-bind:`. In den meisten Fällen können Sie eine Abkürzung für die `v-bind`-Eigenschaft verwenden, indem Sie einfach das Attribut/Prop mit einem Doppelpunkt präfixen. Also funktioniert `:attribute="expression"` genauso wie `v-bind:attribute="expression"`.

Im Fall des Kontrollkästchens in unserer `ToDoItem`-Komponente können wir `v-bind` verwenden, um die `isDone`-Eigenschaft an das `checked`-Attribut des `<input>`-Elements zu binden. Beide folgenden sind gleichwertig:

```vue
<input type="checkbox" id="todo-item" v-bind:checked="isDone" />

<input type="checkbox" id="todo-item" :checked="isDone" />
```

Sie können das Muster verwenden, das Sie möchten. Es ist jedoch am besten, es konsistent zu halten. Da die verkürzte Syntax häufiger verwendet wird, wird dieses Tutorial bei diesem Muster bleiben.

Tun wir das also. Aktualisieren Sie Ihr `<input>`-Element jetzt, um `:checked="isDone"` zu enthalten.

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

Versuchen Sie, `true` auf `false` zu ändern und wieder zurück, wobei Sie Ihre App zwischendurch neu laden, um zu sehen, wie sich der Zustand ändert.

## To-Do-Elementen eine eindeutige ID geben

Großartig! Jetzt haben wir ein funktionierendes Kontrollkästchen, bei dem wir den Status programmatisch einstellen können. Momentan können wir jedoch nur eine `ToDoList`-Komponente auf der Seite hinzufügen, da die `id` hart kodiert ist. Dies würde bei unterstützenden Technologien zu Fehlern führen, da die `id` benötigt wird, um Labels korrekt den Kontrollkästchen zuzuordnen. Um dies zu beheben, können wir die `id` programmgesteuert in den Komponentendaten setzen.

Wir können die Methode {{domxref("Crypto.randomUUID()")}} verwenden, um eine eindeutige Zeichenfolge zu generieren, um die `id`s der Komponenten eindeutig zu halten. `randomUUID()` ist in modernen Browsern eingebaut und bietet eine einfache Möglichkeit, Einzigartigkeit zu gewährleisten, ohne sich auf externe Bibliotheken verlassen zu müssen.

Fügen Sie als Nächstes ein `id`-Feld in die `data`-Eigenschaft wie unten gezeigt hinzu; dies verwendet `crypto.randomUUID()` um eine eindeutige Zeichenfolge zurückzugeben, die wir dann mit `todo-` voranstellen:

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

Binden Sie als Nächstes die `id` sowohl an das `id`-Attribut unseres Kontrollkästchens als auch an das `for`-Attribut des Labels, indem Sie die bestehenden `id`- und `for`-Attribute wie folgt aktualisieren:

```vue
<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">\{{ label }}</label>
  </div>
</template>
```

## Zusammenfassung

Und das war's für diesen Artikel. Zu diesem Zeitpunkt haben wir eine gut funktionierende `ToDoItem`-Komponente, die ein zu zeigendes Label erhalten kann, ihren Aktivierungsstatus speichert und mit jeder neuen Instanz mit einer eindeutigen `id` aufgerufen wird. Sie können überprüfen, ob die eindeutigen `id`s funktionieren, indem Sie vorübergehend mehr `<to-do-item></to-do-item>`-Aufrufe in `App.vue` hinzufügen und dann die gerenderten Ausgaben mit den DevTools Ihres Browsers überprüfen.

Nun sind wir bereit, mehrere `ToDoItem`-Komponenten zu unserer App hinzuzufügen. Im nächsten Artikel werden wir uns damit befassen, eine Reihe von To-Do-Item-Daten zu unserer `App.vue`-Komponente hinzuzufügen, die wir dann mit der `v-for`-Direktive durchlaufen und innerhalb von `ToDoItem`-Komponenten anzeigen werden.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
