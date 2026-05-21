---
title: Verteidigungen
slug: Web/Security/Defenses
l10n:
  sourceCommit: 2d1f9a4d1d01322394b12feebb1f67504383730e
---

Diese Seiten beschreiben Funktionen der Webplattform, die Schutzmaßnahmen gegen eine oder mehrere Sicherheitsangriffe bieten.

In der Regel besteht eine Viele-zu-Viele-Beziehung zwischen Angriffen und Verteidigungen. In jedem unserer [Angriffsleitfäden](/de/docs/Web/Security/Attacks) beschreiben wir die spezifischen Verteidigungen gegen diesen Angriff. Auf den Verteidigungsseiten, die unten aufgeführt sind, bieten wir einen umfassenderen Überblick über diese Verteidigungen und deren Funktionsweise.

- [Zertifikattransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency)
  - : Bietet ein öffentlich sichtbares Protokoll der ausgestellten {{Glossary("TLS", "TLS")}}-Zertifikate, wodurch es einfacher wird, diejenigen zu erkennen, die böswillig oder fehlerhaft ausgestellt wurden.
- [Sperrung gemischter Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)
  - : Verhindert, dass ein über HTTPS ausgeliefertes Dokument Subressourcen (wie Skripte, Bilder oder Schriften) über HTTP lädt.
- [Betriebsicherheit](/de/docs/Web/Security/Defenses/Operational_security)
  - : Sicherheitspraktiken, die sich mit den Prozessen befassen, die bei der Entwicklung, dem Bau, dem Versand und der Aktualisierung eines Projekts befolgt werden müssen.
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
  - : Beschränkt die Möglichkeiten, wie Inhalte aus einem {{Glossary("origin", "origin")}} auf Inhalte zugreifen können, die von einem anderen Ursprung geladen werden. Es kontrolliert, in welchem Umfang Websites auf den Zustand anderer Websites zugreifen können.
- [Gesicherte Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
  - : Ein gesicherter Kontext ist ein `Window` oder `Worker`, für den bestimmte Standards der Authentifizierung und Vertraulichkeit erfüllt sind. Dies bedeutet in der Regel, dass er über {{Glossary("HTTPS", "HTTPS")}} geliefert wurde. Code, der in einem gesicherten Kontext ausgeführt wird, kann leistungsstarke Web-APIs nutzen, die in unsicheren Kontexten nicht verfügbar sind.
- [Integrität von Subressourcen](/de/docs/Web/Security/Defenses/Subresource_Integrity)
  - : Ermöglicht es einer Website zu überprüfen, dass Skripte und Stylesheets von einer externen Quelle (wie einem {{Glossary("CDN", "CDN")}}) den erwarteten Inhalt haben und nicht verändert wurden.
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
  - : Ermöglicht es einem Client, sicher mit einem Server über ein unzuverlässiges Netzwerk zu kommunizieren. Besonders im Web wird es genutzt, um HTTP-Verbindungen abzusichern: Das resultierende Protokoll wird {{Glossary("HTTPS", "HTTPS")}} genannt. HTTPS ist der einzige echte Schutz gegen [Manipulator-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffe.
- [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)
  - : Um den Benutzer vor potenziell böswilligen Websites zu schützen, können bestimmte leistungsstarke APIs nur verwendet werden, wenn der Benutzer derzeit mit der Webseite interagiert oder seit dem Laden der Seite mindestens einmal interagiert hat.
