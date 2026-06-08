---
title: Abwehrmaßnahmen
slug: Web/Security/Defenses
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

Diese Seiten beschreiben Webplattform-Funktionen, die Abwehrmaßnahmen gegen eine oder mehrere Sicherheitsangriffe bieten.

In der Regel besteht eine Viele-zu-Viele-Beziehung zwischen Angriffen und Abwehrmaßnahmen. In jedem unserer [Angriffsleitfäden](/de/docs/Web/Security/Attacks) beschreiben wir die spezifischen Abwehrmaßnahmen gegen diesen Angriff. In den unten aufgeführten Abwehrseiten bieten wir einen umfassenderen Überblick über diese Abwehrmaßnahmen und ihre Funktionsweise.

- [Zertifikatstransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Bietet ein öffentlich sichtbares Protokoll der ausgestellten {{Glossary("TLS", "TLS")}}-Zertifikate, was es einfacher macht, bösartige oder falsch ausgestellte Zertifikate zu erkennen.
- [Mixed-Content-Blockierung](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Verhindert, dass ein über HTTPS geliefertes Dokument Subressourcen (wie Skripte, Bilder oder Schriftarten) über HTTP lädt.
- [Operative Sicherheit](/de/docs/Web/Security/Defenses/Operational_security)
  - : Sicherheitspraktiken, die sich mit den Prozessen beim Entwickeln, Erstellen, Ausliefern und Aktualisieren eines Projekts befassen.
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
  - : Beschränkt die Möglichkeiten, wie Inhalte, die von einem {{Glossary("origin", "Origin")}} geladen werden, auf Inhalte zugreifen können, die von einem anderen Origin geladen werden. Sie steuert, in welchem Umfang Websites auf den Zustand anderer Websites zugreifen können.
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
  - : Ein sicherer Kontext ist ein `Window` oder `Worker`, bei dem bestimmte Standards der Authentifizierung und Vertraulichkeit erfüllt sind. Das bedeutet in der Regel, dass es über {{Glossary("HTTPS", "HTTPS")}} geliefert wurde. Code, der in einem sicheren Kontext läuft, kann mächtige Web-APIs nutzen, die in unsicheren Kontexten nicht verfügbar gemacht werden.
- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : Ermöglicht es einer Website zu überprüfen, ob Skripte und Stylesheets, die von einer externen Quelle (wie einem {{Glossary("CDN", "CDN")}}) geladen werden, den erwarteten Inhalt haben und nicht geändert wurden.
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : Ermöglicht einem Client, sicher mit einem Server über ein unzuverlässiges Netzwerk zu kommunizieren. Besonders wichtig im Web wird es verwendet, um HTTP-Verbindungen zu sichern: Das resultierende Protokoll wird {{Glossary("HTTPS", "HTTPS")}} genannt. HTTPS ist der einzige wirkliche Schutz gegen [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe.
- [Nutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)
  - : Um den Benutzer vor potenziell bösartigen Websites zu schützen, können bestimmte mächtige APIs nur verwendet werden, wenn der Benutzer tatsächlich mit der Webseite interagiert oder seit dem Laden der Seite zumindest einmal interagiert hat.
- [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access)
  - : Die Technologie des lokalen Netzwerkzugriffs schränkt die Fähigkeit von Websites ein, Anfragen an das lokale Netzwerk des Benutzers zu senden, und mindert so das Risiko von Angriffen wie Cross-Site-Request-Forgery. Dieser Artikel erklärt, wie der lokale Netzwerkzugriff funktioniert und was Webentwickler tun müssen, um damit zu interagieren.
