---
title: React-Ressourcen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie für ein vertieftes Lernen nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnis der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Bereitstellung zusätzlicher Ressourcen, um mehr über React zu lernen.</td>
    </tr>
  </tbody>
</table>

## Komponentenbezogene Stile

Während wir im Tutorial alle CSS in einer einzigen `index.css`-Datei gehalten haben, ist es in React-Anwendungen üblich, stylesheets pro Komponente zu definieren. In einer von Vite unterstützten Anwendung kann dies durch Erstellen einer CSS-Datei und Einbinden in das entsprechende Komponentenmodul geschehen.

Zum Beispiel: Wir hätten eine spezielle `Form.css`-Datei erstellen können, um das CSS für die `<Form />`-Komponente zu enthalten, und die Stile dann in `Form.jsx` importiert, wie folgt:

```jsx
import Form from "./Form";
import "./Form.css";
```

Dieser Ansatz erleichtert es, das CSS, das zu einer bestimmten Komponente gehört, zu identifizieren und zu verwalten und es von den anwendungsweiten Stilen zu unterscheiden. Allerdings fragmentiert es auch Ihr Stylesheet in Ihrem Codebestand, und diese Fragmentierung könnte sich nicht lohnen. Für größere Anwendungen mit Hunderten von einzigartigen Ansichten und vielen beweglichen Teilen ist es sinnvoll, komponentenbezogene Stile zu verwenden und so die Menge an irrelevanten Code zu begrenzen, der jederzeit zum Benutzer gesendet wird.

Sie können mehr darüber und über andere Ansätze zur Gestaltung von React-Komponenten im Artikel von Smashing Magazine, [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/), lesen.

## React DevTools

Wir haben `console.log()` verwendet, um den Zustand und die Props unserer Anwendung in diesem Tutorial zu überprüfen, und Sie werden auch einige der nützlichen Warnungen und Fehlermeldungen gesehen haben, die React sowohl im CLI als auch in der JavaScript-Konsole Ihres Browsers gibt. Aber da gibt es noch mehr Möglichkeiten.

Das Utility React DevTools ermöglicht es Ihnen, das Innenleben Ihrer React-Anwendung direkt im Browser zu inspizieren. Es fügt den Entwicklertools Ihres Browsers ein neues Panel hinzu, mit dem Sie den Zustand und die Props verschiedener Komponenten inspizieren und sogar Zustand und Props bearbeiten können, um sofortige Änderungen an Ihrer Anwendung vorzunehmen.

Dieser Screenshot zeigt unsere fertige Anwendung, wie sie in React DevTools erscheint:

![Unser Projekt, dargestellt in React DevTools](react-devtools.png)

Links sehen wir alle Komponenten, aus denen unsere Anwendung besteht, einschließlich eindeutiger Schlüssel für die Elemente, die aus Arrays gerendert werden. Rechts sehen wir die Props und Hooks, die unsere App-Komponente verwendet. Beachten Sie auch, dass die Komponenten `Form`, `FilterButton` und `Todo` nach rechts eingerückt sind – dies zeigt, dass `App` ihr übergeordnetes Element ist. Diese Ansicht ist großartig, um Eltern-Kind-Beziehungen auf einen Blick zu verstehen und ist unverzichtbar für das Verständnis komplexerer Apps.

React DevTools ist in mehreren Formen verfügbar:

- Eine [Chrome-Browsererweiterung](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Eine [Firefox-Browsererweiterung](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Eine [Microsoft Edge-Browsererweiterung](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- Eine [unabhängige Anwendung, die Sie mit npm oder Yarn installieren können](https://www.npmjs.com/package/react-devtools).

Versuchen Sie, eine dieser Optionen zu installieren und verwenden Sie dann diese, um die App, die Sie gerade erstellt haben, zu inspizieren!

Sie können [mehr über React DevTools in der React-Dokumentation lesen](https://react.dev/learn/react-developer-tools).

## Der `useReducer()`-Hook

In diesem Tutorial haben wir den `useState()`-Hook verwendet, um den Zustand über eine kleine Sammlung von Ereignis-Handler-Funktionen zu verwalten. Das war für Lernzwecke in Ordnung, aber es band unsere Zustandsverwaltung an die Ereignis-Handler unserer Komponenten – insbesondere die der `<Todo />`-Komponente.

Der `useReducer()`-Hook bietet Entwicklern eine Möglichkeit, unterschiedliche, aber verwandte Zustandsverwaltung in eine einzige Funktion zu konsolidieren. Er ist etwas komplexer als `useState()`, aber es ist ein gutes Werkzeug, das Sie in Ihrem Repertoire haben sollten. Sie können [mehr über `useReducer()` in der React-Dokumentation lesen](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## Die Context-API

Die Anwendung, die wir in diesem Tutorial gebaut haben, hat Komponenten-Props verwendet, um Daten von ihrer `App`-Komponente an die benötigten Kindkomponenten weiterzugeben. Meistens sind Props eine geeignete Methode, um Daten zu teilen; für komplexe, tief verschachtelte Anwendungen sind sie jedoch nicht immer die beste Wahl.

React bietet die [Context-API](https://react.dev/learn/passing-data-deeply-with-context) als Möglichkeit, Daten an benötigte Komponenten bereitzustellen, _ohne_ Props durch den Komponentenbaum weiterzugeben. Es gibt auch einen [useContext-Hook](https://react.dev/reference/react/useContext), der dies erleichtert.

Wenn Sie diese API selbst ausprobieren möchten, hat Smashing Magazine einen [Einführungsartikel über den React Context](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) geschrieben.

## Klassenkomponenten

Obwohl sie in diesem Tutorial nicht erwähnt werden, ist es möglich, React-Komponenten mit [JavaScript-Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu erstellen – diese werden Klassenkomponenten genannt. Bis zur Einführung der Hooks waren Klassen der einzige Weg, um Zustand in Komponenten einzubringen oder Rendering-Nebenwirkungen zu verwalten. Sie sind immer noch der einzige Weg, um bestimmte Randfälle zu behandeln, und sind in älteren React-Projekten üblich. Die offizielle React-Dokumentation enthält einen Verweis auf die [`Component`](https://react.dev/reference/react/Component) Basisklasse, empfiehlt jedoch, Hooks zur Verwaltung von [Zustand](https://react.dev/learn/state-a-components-memory) und [Nebenwirkungen](https://react.dev/learn/synchronizing-with-effects) zu verwenden.

## Testing

Bibliotheken wie [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) ermöglichen das Schreiben von Unit-Tests für React-Komponenten. Es gibt viele Möglichkeiten, diese Tests _auszuführen_. Das Test-Framework [Vitest](https://vitest.dev/) basiert auf Vite und ist ein großartiger Begleiter zu Ihren Vite-unterstützten React-Anwendungen. [Jest](https://jestjs.io/) ist ein weiteres beliebtes Test-Framework, das mit React verwendet werden kann.

## Routing

Während Routing traditionell von einem Server und nicht von einer Anwendung auf dem Computer des Benutzers gehandhabt wird, ist es möglich, eine Webanwendung so zu konfigurieren, dass sie den Standort des Browsers liest und aktualisiert und bestimmte Benutzeroberflächen rendert. Dies wird _client-seitiges Routing_ genannt. Es ist möglich, viele einzigartige Routen für Ihre Anwendung zu erstellen (wie `/home`, `/dashboard` oder `/login`).

[React Router](https://reactrouter.com/) ist die beliebteste und robusteste client-seitige Routing-Bibliothek für React. Sie ermöglicht es Entwicklern, die Routen ihrer Anwendung zu definieren und Komponenten mit diesen Routen zu verknüpfen. Sie stellt auch eine Reihe nützlicher Hooks und Komponenten zur Verwaltung des Standorts und der Geschichte des Browsers bereit.

> [!NOTE]
> Client-seitiges Routing kann Ihre Anwendung schnell erscheinen lassen, aber es bringt eine Reihe von Zugänglichkeitsproblemen mit sich, insbesondere für Menschen, die auf unterstützende Technologien angewiesen sind. Sie können mehr darüber in Marcy Suttons Artikel, ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing), lesen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
