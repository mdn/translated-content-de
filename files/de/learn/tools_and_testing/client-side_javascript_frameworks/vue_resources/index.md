---
title: Vue-Ressourcen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun werden wir unser Studium von Vue abschließen, indem wir Ihnen eine Liste von Ressourcen geben, die Sie nutzen können, um Ihr Lernen weiter voranzutreiben, sowie einige andere nützliche Tipps.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnisse über
          das <a href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/den Kommandozeilen</a>.
        </p>
        <p>
          Vue-Komponenten werden als eine Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Templatesyntax, die auf die zugrunde liegende DOM-Struktur abbildet. Für die Installation und zur Nutzung einiger der fortgeschritteneren Funktionen von Vue (wie Einzeldateikomponenten oder Render-Funktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, wohin Sie gehen müssen, um weitere Informationen über Vue zu finden und Ihr Lernen fortzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

Hier sollten Sie hingehen, um mehr über Vue zu erfahren:

- [Vue Docs](https://vuejs.org/) — Die Hauptseite von Vue. Beinhaltet umfassende Dokumentation, einschließlich Beispielen, Kochrezepten und Referenzmaterial. Dies ist der beste Ort, um Vue eingehend zu erlernen.
- [Vue GitHub Repo](https://github.com/vuejs/vue) — Der Vue-Code selbst. Hier können Sie Probleme melden und/oder direkt zum Vue-Code beitragen. Das Studium des Vue-Quellcodes kann Ihnen helfen, das Framework besser zu verstehen und besseren Code zu schreiben.
- [Vue Discussions](https://github.com/vuejs/core/discussions) — Das offizielle Forum, um Hilfe zu Vue zu erhalten.
- [Vue CLI Docs](https://cli.vuejs.org/) — Dokumentation für das Vue-CLI. Beinhaltet Informationen zum Anpassen und Erweitern der Ausgabe, die Sie über das CLI generieren.
- [Nuxt](https://nuxt.com/) — Nuxt ist ein serverseitiges Vue-Framework, mit einigen architektonischen Meinungen, die nützlich sein können, um wartbare Anwendungen zu erstellen, auch wenn Sie keine der von ihm bereitgestellten serverseitigen Rendering-Funktionen nutzen. Diese Seite bietet detaillierte Dokumentation zur Nutzung von Nuxt.
- [Vue Mastery](https://www.vuemastery.com/courses/) — Eine kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat, einschließlich einiger kostenloser Lektionen.
- [Vue School](https://vueschool.io/) — Eine weitere kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat.

## Erstellen und Veröffentlichen Ihrer Vue-App

Das Vue-CLI stellt uns auch Werkzeuge zur Verfügung, um unsere App für die Veröffentlichung im Web vorzubereiten. Sie können dies folgendermaßen tun:

- Wenn Ihr lokaler Server noch läuft, stoppen Sie ihn, indem Sie im Terminal <kbd>Strg</kbd> \+ <kbd>C</kbd> drücken.

- Führen Sie anschließend `npm run build` (oder `yarn build`) in der Konsole aus.

Dies wird ein neues `dist`-Verzeichnis erstellen, das alle Ihre produktionsbereiten Dateien enthält. Um Ihre Website im Web zu veröffentlichen, kopieren Sie den Inhalt dieses Ordners in Ihre Hosting-Umgebung.

> [!NOTE]
> Die Vue-CLI-Dokumentation enthält auch einen [speziellen Leitfaden zum Veröffentlichen Ihrer App](https://cli.vuejs.org/guide/deployment.html#platform-guides) auf vielen der gängigen Hosting-Plattformen.

## Vue 2

Der Support für Vue 2 endet am 31. Dezember 2023 und die Standard-Version von Vue für alle CLI-Tools wird Version 3 und höher sein. Die [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) arbeitet als Alternative zur eigenschaftsbasierten API, bei der eine `setup()`-Funktion auf der Komponente verwendet wird. Nur das, was Sie von dieser Funktion zurückgeben, ist in Ihren `<template>`s verfügbar. Sie müssen ausdrücklich „reaktive“ Eigenschaften angeben, wenn Sie diese API verwenden. Vue übernimmt dies für Sie mit der [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). Dies macht die neue API typischerweise als einen fortgeschritteneren Anwendungsfall angesehen.

Wenn Sie von Vue 2 aufrüsten, empfiehlt es sich, den [Vue 3 Migrationsleitfaden](https://v3-migration.vuejs.org/) zu lesen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
