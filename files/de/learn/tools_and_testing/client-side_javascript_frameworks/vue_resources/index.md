---
title: Vue-Ressourcen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nun werden wir unser Studium von Vue mit einer Liste von Ressourcen abschließen, die Sie für Ihre Weiterbildung nutzen können, sowie einige andere nützliche Tipps.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
        <p>
          Vue-Komponenten werden als Kombination aus JavaScript-Objekten geschrieben, die die Daten der App verwalten, und einer HTML-basierten Vorlagensyntax, die der zugrunde liegenden DOM-Struktur zugeordnet ist. Für die Installation und Nutzung einiger fortgeschrittener Funktionen von Vue (wie Single File Components oder Renderfunktionen) benötigen Sie ein Terminal mit installiertem Node + npm.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wo man weitere Informationen über Vue finden kann, um das eigene Wissen zu vertiefen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

Hier sollten Sie hingehen, um mehr über Vue zu lernen:

- [Vue Docs](https://vuejs.org/) — Die Hauptseite von Vue. Enthält umfassende Dokumentation, einschließlich Beispiele, Kochbücher und Referenzmaterial. Dies ist der beste Ausgangspunkt, um Vue im Detail zu lernen.
- [Vue GitHub Repo](https://github.com/vuejs/vue) — Der eigentliche Vue-Code. Hier können Sie Probleme melden und/oder direkt zum Vue-Code beitragen. Das Studium des Vue-Quellcodes kann Ihnen helfen, das Framework besser zu verstehen und besseren Code zu schreiben.
- [Vue Discussions](https://github.com/vuejs/core/discussions) — Das offizielle Forum, um Hilfe zu Vue zu bekommen.
- [Vue CLI Docs](https://cli.vuejs.org/) — Dokumentation für das Vue CLI. Diese enthält Informationen zur Anpassung und Erweiterung der via CLI generierten Ausgaben.
- [Nuxt](https://nuxt.com/) — Nuxt ist ein serverseitiges Vue-Framework, mit einigen architektonischen Meinungen, die nützlich sein können, um wartbare Anwendungen zu erstellen, auch wenn Sie keine der von ihm bereitgestellten Möglichkeiten des Server-Side-Renderings nutzen. Diese Seite bietet detaillierte Dokumentation zur Nutzung von Nuxt.
- [Vue Mastery](https://www.vuemastery.com/courses/) — Eine kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat, einschließlich einiger kostenloser Lektionen.
- [Vue School](https://vueschool.io/) — Eine weitere kostenpflichtige Bildungsplattform, die sich auf Vue spezialisiert hat.

## Erstellen und Veröffentlichen Ihrer Vue-App

Das Vue CLI bietet uns auch Werkzeuge, um unsere App für die Veröffentlichung im Web vorzubereiten. Sie können dies wie folgt tun:

- Wenn Ihr lokaler Server noch läuft, beenden Sie ihn, indem Sie <kbd>Strg</kbd> + <kbd>C</kbd> im Terminal drücken.

- Führen Sie anschließend `npm run build` (oder `yarn build`) in der Konsole aus.

Dies erstellt ein neues `dist`-Verzeichnis, das alle Ihre produktionsbereiten Dateien enthält. Um Ihre Website im Web zu veröffentlichen, kopieren Sie den Inhalt dieses Ordners in Ihre Hosting-Umgebung.

> [!NOTE]
> Die Vue CLI-Dokumentation enthält auch einen [spezifischen Leitfaden zur Veröffentlichung Ihrer App](https://cli.vuejs.org/guide/deployment.html#platform-guides) auf vielen der gängigen Hosting-Plattformen.

## Vue 2

Die Unterstützung für Vue 2 endet am 31. Dezember 2023, und die Standard-Vue-Version für alle CLI-Tools wird Version 3 und höher sein.
Die [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) fungiert als Alternative zur eigenschaftsbasierten API, bei der eine `setup()`-Funktion auf der Komponente verwendet wird. Nur das, was Sie von dieser Funktion zurückgeben, ist in Ihren `<template>`s verfügbar. Sie müssen explizit "reaktive" Eigenschaften bei der Verwendung dieser API angeben. Vue übernimmt dies für Sie mit der [Options API](https://vuejs.org/guide/extras/composition-api-faq.html#trade-offs). Dies macht die neue API in der Regel zu einem fortgeschritteneren Anwendungsfall.

Wenn Sie von Vue 2 upgraden, wird empfohlen, dass Sie einen Blick auf den [Vue 3 Migrationsleitfaden](https://v3-migration.vuejs.org/) werfen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
