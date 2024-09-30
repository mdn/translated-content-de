---
title: React-Ressourcen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Unser abschließender Artikel bietet Ihnen eine Liste von React-Ressourcen, die Sie nutzen können, um Ihr Lernen weiter zu vertiefen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Kenntnisse des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/der Kommandozeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Um weitere Ressourcen für das Lernen über React bereitzustellen.</td>
    </tr>
  </tbody>
</table>

## Komponentenbezogene Stile

Während wir alle CSS für unser Tutorial in einer einzigen `index.css` Datei gehalten haben, ist es üblich, dass React-Anwendungen stylespezifische Stylesheets definieren. In einer von Vite unterstützten Anwendung kann dies durch das Erstellen einer CSS-Datei und den Import dieser in das entsprechende Komponentenmodul geschehen.

Zum Beispiel: Wir hätten eine dedizierte `Form.css` Datei schreiben können, um das CSS des `<Form />`-Komponents aufzunehmen, und die Styles dann in `Form.jsx` importieren können, wie folgt:

```jsx
import Form from "./Form";
import "./Form.css";
```

Dieser Ansatz macht es einfach, das zum spezifischen Komponenten gehörende CSS zu identifizieren und zu verwalten und es von den appweiten Styles zu unterscheiden. Allerdings fragmentiert er auch Ihr Stylesheet über den gesamten Code, und diese Fragmentierung ist unter Umständen nicht lohnenswert. Für größere Anwendungen mit hunderten einzigartigen Ansichten und vielen beweglichen Teilen macht es Sinn, komponentenbezogene Stile zu verwenden und dadurch die Menge an irrelevanten Codes zu begrenzen, die an Ihre Nutzer gesendet wird.

Sie können mehr über diesen und andere Ansätze zum Styling von React-Komponenten im Artikel von Smashing Magazine, [Styling Components In React](https://www.smashingmagazine.com/2020/05/styling-components-react/), lesen.

## React DevTools

Wir haben `console.log()` verwendet, um den Zustand und die Props unserer Anwendung in diesem Tutorial zu überprüfen, und Sie haben auch einige der nützlichen Warnungen und Fehlermeldungen gesehen, die React Ihnen sowohl in der CLI als auch in der JavaScript-Konsole Ihres Browsers gibt. Doch es gibt noch mehr, was wir hier tun können.

Das React DevTools-Utility ermöglicht es Ihnen, das Innere Ihrer React-Anwendung direkt im Browser zu inspizieren. Es fügt den Entwicklertools Ihres Browsers ein neues Panel hinzu, das es Ihnen ermöglicht, den Zustand und die Props verschiedener Komponenten zu überprüfen und sogar Zustand und Props zu bearbeiten, um sofortige Änderungen an Ihrer Anwendung vorzunehmen.

Dieser Screenshot zeigt unsere fertige Anwendung, wie sie in den React DevTools erscheint:

![Unser Projekt wird in den React DevTools angezeigt](react-devtools.png)

Links sehen wir alle Komponenten, die unsere Anwendung ausmachen, einschließlich eindeutiger Schlüssel für die Elemente, die aus Arrays gerendert werden. Rechts sehen wir die Props und Hooks, die unserer App-Komponente verwendet werden. Beachten Sie auch, dass die `Form`, `FilterButton` und `Todo`-Komponenten nach rechts eingerückt sind – dies zeigt an, dass `App` ihr Elternteil ist. Diese Ansicht ist hervorragend geeignet, um die Eltern-/Kinderbeziehungen auf einen Blick zu verstehen, und ist von unschätzbarem Wert für das Verständnis komplexerer Apps.

React DevTools ist in mehreren Formen erhältlich:

- Eine [Chrome Erweiterung](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
- Eine [Firefox Erweiterung](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/).
- Eine [Microsoft Edge Erweiterung](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil).
- Eine [Standalone-Anwendung, die Sie mit npm oder Yarn installieren können](https://www.npmjs.com/package/react-devtools).

Probieren Sie, eine dieser Optionen zu installieren und damit die gerade von Ihnen erstellte Anwendung zu inspizieren!

Sie können [mehr über React DevTools in der React-Dokumentation lesen](https://react.dev/learn/react-developer-tools).

## Der `useReducer()` Hook

In diesem Tutorial haben wir den `useState()` Hook verwendet, um den Zustand über eine kleine Sammlung von Ereignis-Handlerfunktionen zu verwalten. Dies war für Lernzwecke in Ordnung, jedoch band es unsere Zustandsmanagement-Logik an die Ereignis-Handler unseres Komponents – insbesondere die des `<Todo />`-Komponents.

Der `useReducer()` Hook bietet Entwicklern eine Möglichkeit, unterschiedlich, aber verwandte Zustandsmanagement-Logik in einer einzelnen Funktion zu konsolidieren. Es ist etwas komplexer als `useState()`, aber es ist ein gutes Werkzeug, das man in seiner Ausrüstung haben sollte. Sie können [mehr über `useReducer()` in der React-Dokumentation lesen](https://react.dev/learn/extracting-state-logic-into-a-reducer).

## Die Context-API

Die Anwendung, die wir in diesem Tutorial gebaut haben, nutzte Komponenten-Props, um Daten von ihrem `App`-Komponent zu den benötigten Kindkomponenten zu übermitteln. Meistens sind Props eine angemessene Methode, um Daten zu teilen; bei komplexen, tief verschachtelten Anwendungen sind sie jedoch nicht immer die beste Lösung.

React bietet die [Context API](https://react.dev/learn/passing-data-deeply-with-context) als Möglichkeit, Daten an benötigte Komponenten bereitzustellen _ohne_ Props durch den Komponenten-Baum zu leiten. Es gibt auch [einen useContext-Hook](https://react.dev/reference/react/useContext), der dies erleichtert.

Wenn Sie diese API selbst ausprobieren möchten, hat Smashing Magazine einen [einführenden Artikel über React Context](https://www.smashingmagazine.com/2020/01/introduction-react-context-api/) geschrieben.

## Klassokomponenten

Auch wenn sie in diesem Tutorial nicht erwähnt werden, ist es möglich, React-Komponenten mit [JavaScript-Klassen](/de/docs/Web/JavaScript/Reference/Classes) zu erstellen – diese werden als Klassokomponenten bezeichnet. Bis zur Einführung von Hooks waren Klassen der einzige Weg, um Zustand in Komponenten zu bringen oder Seiteneffekte des Renderings zu verwalten. Sie sind immer noch der einzige Weg, um bestimmte Randfälle zu bewältigen, und sie sind üblich in älteren React-Projekten. Die offiziellen React-Dokumente enthalten eine Referenz zur [`Component`](https://react.dev/reference/react/Component)-Basisklasse, empfehlen jedoch, Hooks zu verwenden, um [Zustand](https://react.dev/learn/state-a-components-memory) und [Seiteneffekte](https://react.dev/learn/synchronizing-with-effects) zu verwalten.

## Testen

Bibliotheken wie die [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) machen es möglich, Unit-Tests für React-Komponenten zu schreiben. Es gibt viele Wege, diese Tests _auszuführen_. Das Test-Framework [Vitest](https://vitest.dev/) ist auf Basis von Vite entwickelt und ein hervorragender Begleiter für Ihre Vite-gestützten React-Anwendungen. [Jest](https://jestjs.io/) ist ein weiteres beliebtes Test-Framework, das mit React verwendet werden kann.

## Routing

Während das Routing traditionell von einem Server und nicht von einer Anwendung auf dem Computer des Nutzers gehandhabt wird, ist es möglich, eine Webanwendung so zu konfigurieren, dass sie die Position im Browser liest und aktualisiert und bestimmte Benutzeroberflächen rendert. Dies wird _client-seitiges Routing_ genannt. Es ist möglich, viele einzigartige Routen für Ihre Anwendung zu erstellen (wie z.B. `/home`, `/dashboard` oder `/login`).

[React Router](https://reactrouter.com/) ist die beliebteste und robusteste client-seitige Routing-Bibliothek für React. Sie ermöglicht es Entwicklern, die Routen ihrer Anwendung zu definieren und Komponenten mit diesen Routen zu verknüpfen. Sie bietet auch eine Reihe nützlicher Hooks und Komponenten zum Verwalten der Browserposition und -historie.

> [!NOTE]
> Client-seitiges Routing kann Ihre Anwendung schnell erscheinen lassen, aber es stellt eine Reihe von Zugänglichkeitsproblemen dar, insbesondere für Menschen, die auf unterstützende Technologien angewiesen sind. Sie können mehr darüber in Marcy Suttons Artikel, ["The Implications of Client-Side Routing"](https://testingaccessibility.com/implications-of-client-side-routing), lesen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
