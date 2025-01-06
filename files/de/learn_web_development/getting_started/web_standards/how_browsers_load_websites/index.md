---
title: Wie Browser Websites laden
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, wir bitten um Entschuldigung! Wir arbeiten intensiv daran, den MDN Web Development Leitfaden zu verbessern, und wir werden bald die als unvollständig markierten Stellen ("TODO") fertigstellen.

In diesem Artikel besprechen wir den Renderprozess einer Website – wenn ein Browser die Dateien und Ressourcen empfangen hat, die eine Website ausmachen, wie werden sie dann zusammengefügt, um das fertige Erlebnis zu schaffen, das der Benutzer sieht?

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, Webbrowsern und Webtechnologien.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die verschiedenen Arten von Ressourcen, die in einer HTTP-Antwort zurückgegeben werden.</li>
          <li>Statische versus dynamische Dateien.</li>
          <li>Wie die verschiedenen Dateien zusammengefügt werden, um ein Webdokument zu erstellen, das dann vom Browser angezeigt wird.</li>
          <li>Warum der Browser manchmal als feindliche Programmierumgebung angesehen wird, aber auch als großartige Programmierumgebung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die verschiedenen Dateitypen, die in einer HTTP-Antwort zurückgegeben werden

- HTML-Dateien.
- CSS-Dateien.
- JavaScript-Dateien.
- Medienressourcen wie Bilder, Videos, Audiodateien, {{Glossary("PDF", "PDFs")}} und {{Glossary("SVG", "SVGs")}}.
- Andere Arten von Dateien, die der Browser nicht nativ verarbeiten kann und an eine relevante App auf dem Gerät weitergibt, zum Beispiel Word-Dokumente und PowerPoint-Präsentationen.

## Statische versus dynamische Dateien

Einige heruntergeladene Code-Dateien werden statisch sein (sie existieren auf dem Server in der gleichen Form, wie sie heruntergeladen werden), und einige werden dynamisch sein (vom Server basierend auf variierenden Daten generiert).

## Wie Dateien zusammengefügt werden, um ein Webdokument im Browser darzustellen

- Eine Webseite wird angefordert (z.B. durch Klicken auf einen Link).
- Ein DNS-Lookup wird durchgeführt, um den Standort aller Ressourcen zu finden, die für die Webseite heruntergeladen werden müssen.
- Die Ressourcen beginnen heruntergeladen zu werden. Dies umfasst {{Glossary("TCP_handshake", "TCP-Handshakes")}}, {{Glossary("TLS", "TLS")}}-Verhandlung sowie HTTP-Anfragen und -Antworten.
- Ein {{Glossary("DOM", "DOM")}}-Baum wird aus dem heruntergeladenen HTML erstellt.
- Das {{Glossary("CSSOM", "CSSOM")}} wird aus den CSS-Regeln aufgebaut.
- Das JavaScript wird geparst, interpretiert, kompiliert und ausgeführt.
- Der Zugänglichkeitsbaum wird erstellt, damit unterstützende Technologien (z.B. Bildschirmlesegeräte) darauf zugreifen können.
- Der Renderbaum wird aus dem DOM und dem CSSOM erstellt, um visuelle Stile zu identifizieren, die auf jeden DOM-Knoten angewendet werden.
- Das Seitenlayout wird berechnet.
- Die gestylten, gelayouteten Knoten werden in der richtigen Reihenfolge auf dem Bildschirm gemalt, durch Malen und Komponieren.

## Der Browser: feindliche versus großartige Programmierumgebung

Warum der Browser manchmal als feindliche Programmierumgebung angesehen wird:

- Im Gegensatz zu anderen Programmierumgebungen ist es viel schwieriger, Garantien über die Umgebung zu geben, in der Ihr Code ausgeführt wird.
- Sie können nicht das Betriebssystem, den Browser, die Sprache, den Standort, die Netzwerkverbindung, die CPU, die GPU, den Speicher usw. eines Benutzers garantieren.
- Sie müssen Unsicherheiten akzeptieren und lernen, defensiv zu programmieren. Dies basiert auf der Einhaltung der besten Praktiken, die im [Webstandards-Modell](/de/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model) diskutiert werden. Dies wäre auch ein guter Ort, um verwandte Konzepte wie Fehlerbehandlung, Feature-Erkennung und responsives Design zu betrachten.

Die Kehrseite — warum das Web eine großartige Programmierumgebung ist:

- Sein grundlegender Zustand ist zugänglich und verlinkbar. Einige dieser Grundlagen sind in anderen Umgebungen schwerer zu erreichen.
- Die App-Bereitstellung über das Web ist einfach und leistungsstark.
- Updates sind einfach — in vielen Fällen können Sie einfach den Browser-Tab neu laden. Sie müssen sich nicht ständig um das Herunterladen und Installieren großer Pakete kümmern.
- Die Community ist lebendig und hilfsbereit, und es gibt viele großartige Ressourcen zum Lernen.

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
