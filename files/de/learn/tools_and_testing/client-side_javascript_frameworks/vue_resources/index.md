---
title: Vue-Ressourcen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun werden wir unser Studium von Vue abschließen, indem wir Ihnen eine Liste von Ressourcen geben, die Sie verwenden können, um Ihr Lernen zu vertiefen, sowie einige andere nützliche Tipps.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, sowie Kenntnisse über
          das <a href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">Terminal/Befehlszeile</a>.
        </p>
        <p>
          Vue-Komponenten werden als Kombination von JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die auf die zugrunde liegende DOM-Struktur abgebildet wird. Für die Installation und die Nutzung einiger der fortschrittlicheren Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node und npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wo Sie weitere Informationen zu Vue finden können, um Ihr Lernen fortzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

Hier sollten Sie hingehen, um mehr über Vue zu erfahren:

- [Vue-Dokumentation](https://vuejs.org/) — Die Hauptseite von Vue. Enthält umfassende Dokumentationen, einschließlich Beispielen, Kochbüchern und Referenzmaterial. Dies ist der beste Ort, um Vue gründlich zu lernen.
- [Vue GitHub Repo](https://github.com/vuejs/vue) — Der eigentliche Vue-Code. Hier können Sie Probleme melden und/oder direkt zum Vue-Code beitragen. Das Studium des Vue-Quellcodes kann Ihnen helfen, das Framework besser zu verstehen und besseren Code zu schreiben.
- [Vue-Diskussionen](https://github.com/vuejs/core/discussions) — Das offizielle Forum, um Hilfe zu Vue zu bekommen.
- [Vue CLI-Dokumentation](https://cli.vuejs.org/) — Dokumentation zur Vue CLI. Diese enthält Informationen zum Anpassen und Erweitern der Ausgabe, die Sie über die CLI generieren.
- [Nuxt](https://nuxt.com/) — Nuxt ist ein serverseitiges Vue-Framework mit einigen architektonischen Überlegungen, die nützlich sein können, um wartbare Anwendungen zu erstellen, selbst wenn Sie keine der von ihm bereitgestellten Server-Side-Rendering-Funktionen verwenden. Diese Seite bietet detaillierte Dokumentation zur Verwendung von Nuxt.
- [Vue Mastery](https://www.vuemastery.com/courses/) — Eine kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat, einschließlich einiger kostenloser Lektionen.
- [Vue School](https://vueschool.io/) — Eine weitere kostenpflichtige Bildungsplattform, die auf Vue spezialisiert ist.

## Erstellen und Veröffentlichen Ihrer Vue-App

Die Vue CLI bietet uns auch Tools zur Vorbereitung unserer App für die Veröffentlichung im Web. Sie können dies folgendermaßen tun:

- Wenn Ihr lokaler Server noch läuft, beenden Sie ihn, indem Sie <kbd>Ctrl</kbd> \+ <kbd>C</kbd> im Terminal drücken.

- Führen Sie anschließend `npm run build` (oder `yarn build`) in der Konsole aus.

Dies erstellt ein neues `dist`-Verzeichnis, das alle Ihre produktionsbereiten Dateien enthält. Um Ihre Site im Web zu veröffentlichen, kopieren Sie den Inhalt dieses Ordners in Ihre Hosting-Umgebung.

> [!NOTE]
> Die Vue CLI-Dokumentation enthält auch einen [spezifischen Leitfaden zur Veröffentlichung Ihrer App](https://cli.vuejs.org/guide/deployment.html#platform-guides) auf vielen der gängigen Hosting-Plattformen.

## Vue 2

Die Unterstützung für Vue 2 endet am 31. Dezember 2023 und die Standard-Vue-Version für alle CLI-Tools wird Version 3 und höher sein. Die [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) funktioniert als Alternative zur eigenschaftsbasierten API, bei der eine `setup()`-Funktion in der Komponente verwendet wird. Nur was Sie von dieser Funktion zurückgeben, ist in Ihren `<template>`s verfügbar. Sie müssen bei der Verwendung dieser API explizit auf "reaktive" Eigenschaften achten. Vue übernimmt dies für Sie durch die [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). Dies macht die neue API typischerweise zu einem fortgeschritteneren Anwendungsfall.

Wenn Sie von Vue 2 aktualisieren, wird empfohlen, einen Blick auf den [Vue 3-Migrationsleitfaden](https://v3-migration.vuejs.org/) zu werfen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
