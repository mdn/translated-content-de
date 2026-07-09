---
title: Lieferkettenangriffe
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Eine _Software-Lieferkette_ besteht aus aller Software und allen Werkzeugen, die zur Erstellung und Pflege eines Softwareprodukts verwendet werden. Dazu gehört nicht nur die für das Produkt selbst entwickelte Software, sondern auch alle Software und Werkzeuge, die bei der Herstellung verwendet werden.

Bei einem Lieferkettenangriff zielt der Angreifer darauf ab, einen Teil der Lieferkette des Produkts zu kompromittieren, um das Produkt selbst zu gefährden.

Das offensichtlichste Beispiel hierfür ist eine Bibliothek eines Drittanbieters. Wenn Sie beispielsweise ein [npm](https://www.npmjs.com/)-Paket eines Drittanbieters verwenden, hat es die Möglichkeit, Ihre Website zu gefährden. Dies kann absichtlich geschehen, wenn es bösartig ist, oder versehentlich, wenn es unbeabsichtigte Schwachstellen enthält. Im Wesentlichen müssen Sie Ihren Drittanbieterabhängigkeiten genauso vertrauen wie Ihrem eigenen Code.

Weniger offensichtlich gilt dasselbe Prinzip für alle Werkzeuge, die Sie bei der Erstellung Ihrer Software verwenden, einschließlich Code-Editoren, Editor-Plugins, Versionskontrollsystemen, Build-Tools usw. Jedes dieser Werkzeuge könnte bösartigen oder anfälligen Code in Ihr endgültiges Softwareprodukt einfügen, im Laufe der Transformationen, die sie anwenden.

In diesem Dokument skizzieren wir Praktiken, die Sie befolgen sollten, um Ihre Software-Lieferkette zu sichern. Es ist in zwei Hauptabschnitte gegliedert:

- [Sichern Ihrer Entwicklungsumgebung](#sichern_ihrer_entwicklungsumgebung): Praktiken, um sicherzustellen, dass Ihr eigener Code nicht kompromittiert wird.
- [Verwaltung von Drittanbieterabhängigkeiten](#verwaltung_von_drittanbieterabhängigkeiten): Praktiken, um sicherzustellen, dass Ihre Abhängigkeiten nicht kompromittiert werden.

## Sichern Ihrer Entwicklungsumgebung

Ein Weg für einen Lieferkettenangriff besteht darin, dass ein Angreifer Schwachstellen oder bösartigen Code direkt in Ihr eigenes Produkt einführt. Typischerweise tut ein Angreifer dies, indem er das Konto eines Projekterhalters kompromittiert oder Schwächen in den von den Erhaltern verwendeten Entwicklerwerkzeugen ausnutzt.

Unser Leitfaden zur [operativen Sicherheit](/de/docs/Web/Security/Defenses/Operational_security#securing_your_development_environment) beschreibt Praktiken zur Bekämpfung dieser Bedrohungen, einschließlich:

- [Erfordern von starker Authentifizierung für Projekterhalter](/de/docs/Web/Security/Defenses/Operational_security#requiring_strong_authentication_for_project_maintainers)
- [Implementierung von rollenbasierter Zugriffskontrolle für Projekterhalter](/de/docs/Web/Security/Defenses/Operational_security#implementing_role-based_access_control_for_project_maintainers)
- [Bewertung der von Ihnen verwendeten Werkzeuge](/de/docs/Web/Security/Defenses/Operational_security#evaluating_the_tools_you_use)
- [Sichern Ihrer Konfiguration](/de/docs/Web/Security/Defenses/Operational_security#securing_your_configuration)

## Verwaltung von Drittanbieterabhängigkeiten

Drittanbieterabhängigkeiten umfassen nicht nur Bibliotheken und Frameworks, die Ihr Code verwendet, sondern alle Drittanbieterwerkzeuge, die am Entwicklungsprozess beteiligt sind, einschließlich Editoren, IDEs, Versionskontrollsystemen, Paketmanager und Build-Tools.

Angreifer können Ihr Projekt kompromittieren, indem sie Schwächen in diesen Abhängigkeiten ausnutzen. Unser Leitfaden zur [operativen Sicherheit](/de/docs/Web/Security/Defenses/Operational_security#managing_third-party_dependencies) beschreibt Praktiken zur Bekämpfung dieser Bedrohungen, einschließlich:

- [Bewertung neuer Abhängigkeiten](/de/docs/Web/Security/Defenses/Operational_security#evaluating_new_dependencies)
- [Aktualisierung bestehender Abhängigkeiten](/de/docs/Web/Security/Defenses/Operational_security#updating_dependencies)
- [Pflege eines _Software Bill of Materials_ (SBOM)](/de/docs/Web/Security/Defenses/Operational_security#maintaining_a_software_bill_of_materials)

Zudem sollten Projekte [Subresource Integrity verwenden](#verwendung_von_subresource_integrity) für Scripts und Stylesheets, die von einer Drittanbieter-Website gehostet werden.

### Verwendung von Subresource Integrity

Viele Websites beinhalten extern gehostete Skripte: am bemerkenswertesten, aber nicht ausschließlich, Skripte, die von einem {{Glossary("CDN", "Content Delivery Network (CDN)")}} bereitgestellt werden:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Dies stellt ein Risiko für Ihre Lieferkette dar: Wenn ein Angreifer die Kontrolle über die Domain `cdn.example.org` erlangen kann, kann er das Skript durch ein bösartiges Skript ersetzen und so Ihre Website gefährden.

Externe Skripte, wie andere Softwareabhängigkeiten, sollten Teil Ihrer SBOM sein, aber eine zusätzliche Abwehr ist das Festlegen des [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attributs des Skripts:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

Der Wert dieses Attributs enthält einen {{Glossary("hash_function", "kryptografischen Hash")}} der Skriptinhalte. Wenn das Skript von einem Angreifer modifiziert wurde, wird der Browser es ablehnen zu laden und Sie sind geschützt.

Dies erhöht jedoch den Wartungsaufwand: Jedes Mal, wenn sich die Quelle ändert (zum Beispiel, wenn eine neue Version veröffentlicht wird), müssen Sie den Wert des Attributs in Ihrem Code aktualisieren.

Das {{htmlelement("link")}}-Element unterstützt ebenfalls das `integrity`-Attribut, sodass Sie es für CSS-Stylesheets ebenso wie für Skripte verwenden (und sollten).

Weitere Details finden Sie unter [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).

## Verteidigungszusammenfassung-Checkliste

- Befolgen Sie Praktiken zur operativen Sicherheit, um:
  - [Ihre eigene Entwicklungsumgebung zu sichern](/de/docs/Web/Security/Defenses/Operational_security#securing_your_development_environment).
  - [Das Risiko von Drittanbieterabhängigkeiten zu minimieren](/de/docs/Web/Security/Defenses/Operational_security#managing_third-party_dependencies).
- Verwenden Sie [Subresource Integrity](#verwendung_von_subresource_integrity) für extern referenzierte Skripte und Stylesheets.

## Siehe auch

- [Software Supply Chain Security](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)
