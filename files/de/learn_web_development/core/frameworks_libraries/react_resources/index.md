---
title: React-Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/React_resources
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie verwenden können, um Ihr Lernen weiter zu vertiefen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Vertrautheit mit weiteren Ressourcen, um mehr über React zu lernen.</td>
    </tr>
  </tbody>
</table>

## Komponentenbasierte Stile

Obwohl wir alle CSS für unser Tutorial in einer einzigen `index.css` Datei gelassen haben, ist es in React-Anwendungen üblich, pro-Komponente Stylesheets zu definieren. In einer Anwendung, die von Vite unterstützt wird, kann dies durch Erstellen einer CSS-Datei und Importieren in das entsprechende Komponentenmodul erfolgen.

Zum Beispiel: Wir könnten eine dedizierte `Form.css` Datei geschrieben haben, um das CSS, das sich auf die `<Form />` Komponente bezieht, zu beherbergen, und die Stile dann in `Form.jsx` importiert haben, so:

```jsx
import Form from "./Form";
import "./Form.css";
```

Dieser Ansatz erleichtert es, das CSS zu identifizieren und zu verwalten, das zu einer bestimmten Komponente gehört, und es von Ihren anwendungsweiten Stilen zu unterscheiden. Es fragmentiert jedoch auch Ihr Stylesheet über Ihren Codebereich hinweg, und diese Fragmentierung könnte sich nicht lohnen. Für größere Anwendungen mit Hunderten von einzigartigen Ansichten und vielen beweglichen Teilen macht es Sinn, komponentenbasierte Stile zu verwenden und dadurch die Menge an irrelevanten Code, der zu einem bestimmten Zeitpunkt an Ihren Benutzer gesendet wird, zu begrenzen.

Sie können mehr darüber und über andere Ansätze zum Styling von React-Komponenten im Smashing Magazine Artikel lesen: [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/).

## React DevTools

Wir haben `console.log()` verwendet, um den Zustand und die Props unserer Anwendung in diesem Tutorial zu überprüfen, und Sie werden auch einige der nützlichen Warnungen und Fehlermeldungen gesehen haben, die React Ihnen sowohl in der CLI als auch in der JavaScript-Konsole Ihres Browsers gibt. Aber es gibt noch mehr, was wir hier tun können.

Das React DevTools-Utility ermöglicht es Ihnen, die Interna Ihrer React-Anwendung direkt im Browser zu inspizieren. Es fügt den Entwicklertools Ihres Browsers ein neues Panel hinzu, das es Ihnen erlaubt, den Zustand und die Props verschiedener Komponenten zu inspizieren und sogar Zustand und Props zu bearbeiten, um sofortige Änderungen an Ihrer Anwendung vorzunehmen.

Dieser Screenshot zeigt unsere fertige Anwendung, wie sie in React DevTools erscheint:

![Unser Projekt wird in den React-Devtools gezeigt](react-devtools.png)

Links sehen wir alle Komponenten, die unsere Anwendung ausmachen, einschließlich einzigartiger Schlüssel für die Elemente, die aus Arrays gerendert werden. Rechts sehen wir die Props und Hooks, die unsere App Komponente verwendet. Beachten Sie auch, dass die `Form`, `FilterButton` und `Todo` Komponenten nach rechts eingerückt sind – dies zeigt an, dass `App` ihr Elternteil ist. Diese Ansicht ist großartig, um Eltern-Kind-Beziehungen auf einen Blick zu verstehen und ist unersetzlich, um komplexere Apps zu verstehen.

React DevTools ist in mehreren Formen verfügbar:

- Eine [Chrome Browser-Erweiterung](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Eine [Firefox Browser-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Eine [Microsoft Edge Browser-Erweiterung](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- Eine [eigenständige Anwendung, die Sie mit npm oder Yarn installieren können](https://www.npmjs.com/package/react-devtools).

Versuchen Sie, eine davon zu installieren und dann die App, die Sie gerade gebaut haben, damit zu inspizieren!

Sie können [mehr über React DevTools in den React-Dokumentationen lesen](https://react.dev/learn/react-developer-tools).

## Der `useReducer()` Hook

In diesem Tutorial haben wir den `useState()` Hook verwendet, um den Zustand über eine kleine Sammlung von Ereignis-Handler-Funktionen hinweg zu verwalten. Das war für Lernzwecke in Ordnung, aber es ließ unsere Zustandsverwaltungslogik an die Ereignis-Handler unserer Komponente gebunden – insbesondere die des `<Todo />` Komponenten.

Der `useReducer()` Hook bietet Entwicklern eine Möglichkeit, unterschiedlich, aber verwandte Zustandsverwaltungslogik in einer einzigen Funktion zu konsolidieren. Es ist etwas komplexer als `useState()`, aber es ist ein gutes Werkzeug, das man im Repertoire haben sollte. Sie können [mehr über `useReducer()` in den React-Dokumentationen lesen](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## Die Kontexte-API

Die Anwendung, die wir in diesem Tutorial gebaut haben, nutzte Komponenten-Props, um Daten von ihrer `App` Komponente an die untergeordneten Komponenten weiterzugeben, die sie benötigten. Meistens sind Props eine geeignete Methode zum Teilen von Daten; für komplexe, tief verschachtelte Anwendungen sind sie jedoch nicht immer die beste Wahl.

React bietet die [Kontext-API](https://react.dev/learn/passing-data-deeply-with-context) als eine Möglichkeit, Komponenten die Daten zu bieten, die sie benötigen, _ohne_ Props entlang des Komponentenbaums zu übergeben. Es gibt auch [einen useContext-Hook](https://react.dev/reference/react/useContext), der dies erleichtert.

Wenn Sie diese API selbst ausprobieren möchten, hat Smashing Magazine einen [einführenden Artikel über den React-Kontext](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) geschrieben.

## Klassen-Komponenten

Obwohl dieses Tutorial sie nicht erwähnt, ist es möglich, React-Komponenten unter Verwendung von [JavaScript-Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu erstellen – diese werden Klassen-Komponenten genannt. Bis zur Einführung von Hooks waren Klassen die einzige Möglichkeit, Zustand in Komponenten zu bringen oder Rendering-Nebenwirkungen zu verwalten. Sie sind immer noch die einzige Möglichkeit, bestimmte Randfälle zu behandeln und sind in älteren React-Projekten üblich. Die offiziellen React-Dokumentationen halten eine Referenz für die [`Component`](https://react.dev/reference/react/Component) Basisklasse bereit, empfehlen jedoch die Verwendung von Hooks zur Verwaltung von [Zustand](https://react.dev/learn/state-a-components-memory) und [Nebenwirkungen](https://react.dev/learn/synchronizing-with-effects).

## Testen

Bibliotheken wie [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) machen es möglich, Komponententest für React-Komponenten zu schreiben. Es gibt viele Möglichkeiten, diese Tests _auszuführen_. Das Test-Framework [Vitest](https://vitest.dev/) ist auf Vite aufgebaut und ist ein großartiger Begleiter für Ihre Vite-gesteuerten React-Anwendungen. [Jest](https://jestjs.io/) ist ein weiteres beliebtes Test-Framework, das mit React verwendet werden kann.

## Routing

Während Routing traditionell von einem Server und nicht von einer Anwendung auf dem Computer des Benutzers gehandhabt wird, ist es möglich, eine Webanwendung so zu konfigurieren, dass sie den Standort des Browsers liest und aktualisiert sowie bestimmte Benutzeroberflächen rendert. Dies wird _Client-seitiges Routing_ genannt. Es ist möglich, viele einzigartige Routen für Ihre Anwendung zu erstellen (wie `/home`, `/dashboard` oder `/login`).

[React Router](https://reactrouter.com/) ist die beliebteste und robusteste Client-seitige Routing-Bibliothek für React. Sie erlaubt es Entwicklern, die Routen ihrer Anwendung zu definieren und Komponenten mit diesen Routen zu verknüpfen. Sie bietet auch eine Reihe nützlicher Hooks und Komponenten zur Verwaltung des Standorts und der Historie des Browsers.

> [!NOTE]
> Client-seitiges Routing kann Ihre Anwendung schnell wirken lassen, aber es bringt eine Reihe von Zugänglichkeitsproblemen mit sich, insbesondere für Menschen, die auf unterstützende Technologien angewiesen sind. Sie können mehr darüber in Marcy Suttons Artikel lesen, ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing).

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
