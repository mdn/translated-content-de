---
title: React-Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/React_resources
l10n:
  sourceCommit: 418fefaa02f8e1ea53d53cb6fc510a4dc4100dc5
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Unser letzter Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen weiter zu vertiefen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Konsole/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>Vertrautheit mit weiteren Ressourcen, um mehr über React zu lernen.</td>
    </tr>
  </tbody>
</table>

## Komponentenspezifische Stile

Während wir alle CSS für unser Tutorial in einer einzigen `index.css`-Datei gehalten haben, ist es in React-Anwendungen üblich, pro Komponente Stylesheets zu definieren. In einer von Vite unterstützten Anwendung kann dies durch Erstellen einer CSS-Datei und deren Import in das entsprechende Komponentenmodul erfolgen.

Zum Beispiel: Wir könnten eine eigene `Form.css`-Datei geschrieben haben, um das CSS für die `<Form />`-Komponente unterzubringen, und die Stile dann in `Form.jsx` importiert haben, wie folgt:

```jsx
import Form from "./Form";
import "./Form.css";
```

Dieser Ansatz macht es einfach, das CSS zu identifizieren und zu verwalten, das zu einer bestimmten Komponente gehört, und es von Ihren anwendungsweiten Stilen zu unterscheiden. Es fragmentiert jedoch auch Ihr Stylesheet über Ihre Codebasis, und diese Fragmentierung könnte sich nicht lohnen. Für größere Anwendungen mit Hunderten von einzigartigen Ansichten und vielen sich ändernden Teilen macht es Sinn, komponentenspezifische Stile zu verwenden und dadurch die Menge des irrelevanten Codes zu begrenzen, der zu einem bestimmten Zeitpunkt an Ihre Nutzer gesendet wird.

Weitere Informationen über diesen und andere Ansätze zur Gestaltung von React-Komponenten finden Sie im Artikel von Smashing Magazine, [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/).

## React DevTools

Wir haben `console.log()` verwendet, um den Zustand und den Props unserer Anwendung in diesem Tutorial zu überprüfen, und Sie haben sicher auch einige der nützlichen Warnungen und Fehlermeldungen gesehen, die React Ihnen sowohl in der CLI als auch in der JavaScript-Konsole Ihres Browsers gibt. Aber es gibt mehr, was wir hier tun können.

Das React DevTools-Utility ermöglicht es Ihnen, das Innenleben Ihrer React-Anwendung direkt im Browser zu inspizieren. Es fügt den Entwickler-Tools Ihres Browsers ein neues Panel hinzu, mit dem Sie den Zustand und die Props verschiedener Komponenten inspizieren und sogar den Zustand und die Props bearbeiten können, um sofortige Änderungen an Ihrer Anwendung vorzunehmen.

Dieses Bildschirmfoto zeigt unsere fertige Anwendung, wie sie in den React DevTools erscheint:

![Unser Projekt in den React DevTools dargestellt](react-devtools.png)

Links sehen wir alle Komponenten, die unsere Anwendung ausmachen, einschließlich eindeutiger Schlüssel für die Elemente, die aus Arrays gerendert werden. Auf der rechten Seite sehen wir die Props und Hooks, die unsere App-Komponente verwendet. Beachten Sie auch, dass die Komponenten `Form`, `FilterButton` und `Todo` nach rechts eingerückt sind – dies zeigt an, dass `App` ihr übergeordnetes Element ist. Diese Ansicht ist hervorragend, um Eltern-Kind-Beziehungen auf einen Blick zu verstehen und ist unverzichtbar, um komplexere Apps zu verstehen.

React DevTools ist in mehreren Formen verfügbar:

- Eine [Chrome-Browser-Erweiterung](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Eine [Firefox-Browser-Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Eine [Microsoft Edge-Browser-Erweiterung](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- Eine [stand-alone Anwendung, die Sie mit npm oder Yarn installieren können](https://www.npmjs.com/package/react-devtools).

Versuchen Sie, eine davon zu installieren, und nutzen Sie sie, um die von Ihnen gerade gebaute App zu inspizieren!

Sie können [mehr über React DevTools in den React-Dokumentationen lesen](https://react.dev/learn/react-developer-tools).

## Der `useReducer()` Hook

In diesem Tutorial haben wir den `useState()` Hook verwendet, um den Zustand über eine kleine Sammlung von Ereignishandlerfunktionen zu verwalten. Dies war für Lernzwecke ausreichend, aber es ließ unsere Zustandslogik mit den Ereignishandlern unserer Komponente – insbesondere denen der `<Todo />` Komponente – verknüpft.

Der `useReducer()` Hook bietet Entwicklern die Möglichkeit, unterschiedliche, aber verwandte Zustandslogik in eine einzige Funktion zu konsolidieren. Er ist etwas komplexer als `useState()`, aber ein gutes Werkzeug, um es in Ihrem Gürtel zu haben. Sie können [mehr über `useReducer()` in den React-Dokumentationen lesen](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## Die Context API

Die Anwendung, die wir in diesem Tutorial gebaut haben, nutzte Komponenten-Props, um Daten von ihrer `App`-Komponente an die untergeordneten Komponenten zu übergeben, die sie benötigen. Meistens sind Props eine geeignete Methode zum Teilen von Daten; für komplexe, tief verschachtelte Anwendungen sind sie jedoch nicht immer die beste Wahl.

React bietet die [Context API](https://react.dev/learn/passing-data-deeply-with-context) als Möglichkeit, Daten an Komponenten bereitzustellen, die sie benötigen, _ohne_ Props durch den Komponentenbaum zu übergeben. Es gibt auch einen [useContext Hook](https://react.dev/reference/react/useContext), der dies erleichtert.

Wenn Sie diese API selbst ausprobieren möchten, hat Smashing Magazine einen [einführenden Artikel über React Context geschrieben](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/).

## Klassenkomponenten

Obwohl dieses Tutorial sie nicht erwähnt, ist es möglich, React-Komponenten mit [JavaScript-Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu erstellen – diese werden als Klassenkomponenten bezeichnet. Bis zur Einführung der Hooks waren Klassen der einzige Weg, um Zustand in Komponenten zu bringen oder Seiteneffekte des Renderings zu verwalten. Sie sind immer noch der einzige Weg, um bestimmte Randfälle zu behandeln, und sind in älteren React-Projekten häufig anzutreffen. Die offiziellen React-Dokumentationen pflegen eine Referenz für die [`Component`](https://react.dev/reference/react/Component) Basisklasse, empfehlen jedoch die Verwendung von Hooks zur Verwaltung von [Zustand](https://react.dev/learn/state-a-components-memory) und [Seiteneffekten](https://react.dev/learn/synchronizing-with-effects).

## Testen

Bibliotheken wie die [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) ermöglichen es, Unit-Tests für React-Komponenten zu schreiben. Es gibt viele Möglichkeiten, diese Tests _auszuführen_. Das Test-Framework [Vitest](https://vitest.dev/) baut auf Vite auf und ist ein großartiger Begleiter für Ihre von Vite unterstützten React-Anwendungen. [Jest](https://jestjs.io/) ist ein weiteres beliebtes Test-Framework, das mit React verwendet werden kann.

## Routing

Während das Routing traditionell von einem Server und nicht von einer Anwendung auf dem Computer des Benutzers gehandhabt wird, ist es möglich, eine Webanwendung so zu konfigurieren, dass sie den Speicherort des Browsers liest und aktualisiert und bestimmte Benutzeroberflächen rendert. Dies wird als _Client-seitiges Routing_ bezeichnet. Es ist möglich, viele einzigartige Routen für Ihre Anwendung zu erstellen (wie zum Beispiel `/home`, `/dashboard` oder `/login`).

[React Router](https://reactrouter.com/) ist die beliebteste und robusteste Client-seitige Routing-Bibliothek für React. Es ermöglicht Entwicklern, die Routen ihrer Anwendung zu definieren und Komponenten mit diesen Routen zu verknüpfen. Es bietet auch eine Reihe von nützlichen Hooks und Komponenten zur Verwaltung des Speicherorts und der Historie des Browsers.

> [!NOTE]
> Client-seitiges Routing kann Ihre Anwendung schnell erscheinen lassen, birgt jedoch eine Reihe von Barrierefreiheitsproblemen, insbesondere für Menschen, die auf unterstützende Technologien angewiesen sind. Sie können mehr darüber in Marcy Suttons Artikel ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing) lesen.

## Zusammenfassung

Das war es für JavaScript-Frameworks. Wir hoffen, dass Ihnen dieses Modul eine gute Vorstellung davon gegeben hat, warum Frameworks existieren und wie man sie verwendet.

Im nächsten Modul konzentrieren wir uns auf die [Web-Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility).

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_accessibility","Learn_web_development/Core/Accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
