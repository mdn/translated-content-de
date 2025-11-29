---
title: Abwehrmechanismen
slug: Web/Security/Defenses
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

Diese Seiten beschreiben Web-Plattform-Features, die Abwehrmechanismen gegen eine oder mehrere Sicherheitsattacken bieten.

In der Regel gibt es eine viele-zu-viele-Beziehung zwischen Angriffen und Abwehrmechanismen. In jedem unserer [Angriffsleitfäden](/de/docs/Web/Security/Attacks) beschreiben wir die spezifischen Abwehrmechanismen gegen diesen Angriff. Auf den unten aufgeführten Abwehrmechanismen-Seiten bieten wir einen umfassenderen Überblick über diese Abwehrmechanismen und deren Funktionsweise.

- [Zertifikattransparenz](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Bietet ein öffentlich sichtbares Protokoll der ausgestellten {{Glossary("TLS", "TLS")}}-Zertifikate, was es einfacher macht, solche zu erkennen, die böswillig oder fälschlicherweise ausgestellt wurden.
- [Mixed-Content-Blockierung](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Verhindert, dass ein über HTTPS geliefertes Dokument Subressourcen (wie Skripte, Bilder oder Schriftarten) über HTTP lädt.
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
  - : Beschränkt die Möglichkeiten, wie Inhalte, die von einem {{Glossary("origin", "Ursprung")}} geladen wurden, auf Inhalte zugreifen können, die von einem anderen Ursprung geladen wurden. Sie kontrolliert das Ausmaß, in dem Websites auf den Zustand anderer Websites zugreifen können.
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
  - : Ein sicherer Kontext ist ein `Window` oder `Worker`, für den bestimmte Standards der Authentifizierung und Vertraulichkeit erfüllt sind. Dies bedeutet in der Regel, dass er über {{Glossary("HTTPS", "HTTPS")}} geliefert wurde. Code, der in einem sicheren Kontext läuft, kann leistungsstarke Web-APIs nutzen, die in unsicheren Kontexten nicht verfügbar sind.
- [Sub-Resource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : Ermöglicht es einer Website zu überprüfen, ob Skripte und Stylesheets, die von einer externen Quelle (wie einem {{Glossary("CDN", "CDN")}}) geladen wurden, den erwarteten Inhalt haben und nicht verändert wurden.
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : Ermöglicht es einem Client, sicher mit einem Server über ein unzuverlässiges Netzwerk zu kommunizieren. Am bemerkenswertesten ist, dass es im Web verwendet wird, um HTTP-Verbindungen zu sichern: das resultierende Protokoll wird {{Glossary("HTTPS", "HTTPS")}} genannt. HTTPS ist der einzige echte Schutz gegen [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe.
- [Nutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)
  - : Um den Benutzer vor potenziell bösartigen Websites zu schützen, können bestimmte leistungsstarke APIs nur verwendet werden, wenn der Benutzer derzeit mit der Webseite interagiert oder mindestens einmal mit der Seite interagiert hat, seit sie geladen wurde.
