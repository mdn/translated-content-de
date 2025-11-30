---
title: Abwehrmaßnahmen
slug: Web/Security/Defenses
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Diese Seiten beschreiben Funktionen der Webplattform, die Schutz gegen eine oder mehrere Sicherheitsangriffe bieten.

In der Regel besteht eine Viele-zu-Viele-Beziehung zwischen Angriffen und Abwehrmaßnahmen. In jedem unserer [Angriffsleitfäden](/de/docs/Web/Security/Attacks) beschreiben wir die spezifischen Abwehrmaßnahmen gegen diesen Angriff. In den unten aufgeführten Abwehrseiten geben wir einen umfassenderen Überblick über diese Abwehrmaßnahmen und deren Funktionsweise.

- [Zertifikatstransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Bietet ein öffentlich sichtbares Protokoll der ausgestellten {{Glossary("TLS", "TLS")}}-Zertifikate, was es einfacher macht, bösartige oder fehlerhaft ausgestellte Zertifikate zu erkennen.
- [Blockierung gemischter Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Verhindert, dass ein über HTTPS geliefertes Dokument Subressourcen (wie Skripte, Bilder oder Schriftarten) über HTTP lädt.
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
  - : Beschränkt die Möglichkeiten, wie Inhalte, die von einem {{Glossary("origin", "Ursprung")}} geladen wurden, auf Inhalte zugreifen können, die von einem anderen Ursprung geladen wurden. Sie kontrolliert, in welchem Umfang Websites auf die Zustände anderer Websites zugreifen können.
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
  - : Ein sicherer Kontext ist ein `Window` oder `Worker`, für den bestimmte Standards der Authentifizierung und Vertraulichkeit erfüllt sind. Das bedeutet üblicherweise, dass er über {{Glossary("HTTPS", "HTTPS")}} geliefert wurde. Code, der in einem sicheren Kontext ausgeführt wird, kann leistungsstarke Web-APIs nutzen, die in unsicheren Kontexten nicht verfügbar sind.
- [Integrität von Subressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : Ermöglicht einer Website zu überprüfen, ob Skripte und Stylesheets, die von einer externen Quelle (wie einem {{Glossary("CDN", "CDN")}}) geladen wurden, den erwarteten Inhalt haben und nicht verändert wurden.
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : Ermöglicht es einem Client, sicher mit einem Server über ein unzuverlässiges Netzwerk zu kommunizieren. Am auffälligsten wird es im Web verwendet, um HTTP-Verbindungen zu sichern: das resultierende Protokoll wird {{Glossary("HTTPS", "HTTPS")}} genannt. HTTPS ist der einzige echte Schutz gegen [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe.
- [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)
  - : Um den Benutzer vor potenziell bösartigen Websites zu schützen, können bestimmte leistungsstarke APIs nur verwendet werden, wenn der Benutzer gerade mit der Webseite interagiert oder mindestens einmal mit ihr interagiert hat, seit sie geladen wurde.
