---
title: Bedrohungsmodellierung für Datenschutz
slug: Web/Privacy/Threat_modeling
l10n:
  sourceCommit: f7740136226ddfb686dede1dc291660c5729d17d
---

Die Bedrohungsmodellierung hilft Ihnen, Probleme zu identifizieren, bevor sie Teil Ihrer Anwendung werden. Während sich die Sicherheitsbedrohungsmodellierung darauf konzentriert, Systeme und Daten vor Angreifern zu schützen, konzentriert sich die Datenschutz-Bedrohungsmodellierung darauf, Risiken für die Personen zu identifizieren und zu reduzieren, die Ihre Anwendung nutzen und deren persönliche Informationen verarbeitet werden.

Dieser Artikel erklärt, wie man den Prozess der Bedrohungsmodellierung aus einer datenschutzrechtlichen Perspektive anwendet. Wenn Sie neu in der Bedrohungsmodellierung sind, lesen Sie zunächst den MDN-Leitfaden zur [Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling).

Dieser Artikel bietet einen generischen Ansatz zur Datenschutz-Bedrohungsmodellierung. Abhängig von Ihrer Anwendung, gesetzlichen Verpflichtungen und den Datenschutzerwartungen Ihrer Nutzer, kann eine detailliertere Bewertung erforderlich sein. Datenschutz-Risikoanalysen erstrecken sich oft über das technische Design hinaus und umfassen organisatorische, rechtliche und politische Überlegungen. Zum Beispiel ist die Bewertung eines persönlichen Blogs sehr unterschiedlich zur Bewertung einer Anwendung, die Gesundheitsdaten verarbeitet.

Wenn Ihnen gängige Datenschutzkonzepte wie persönliche Informationen, Einwilligung oder Datenminimierung nicht vertraut sind, beginnen Sie mit dem [Datenschutzleitfaden](/de/docs/Web/Privacy/Privacy_primer).

## Was ist eine Datenschutzbedrohung?

Eine Datenschutzbedrohung ist eine Handlung oder Bedingung, die zu Datenschutzverletzungen für eine Person führen kann. Datenschutzverletzungen können sich auf Folgendes auswirken:

- Finanzen: Verlust von Geld, Beschäftigung oder anderen wirtschaftlichen Chancen.
- Ruf: Offenlegung oder Fehlinterpretation von Informationen, die zu Peinlichkeiten oder Vertrauensverlust führen.
- Einsamkeit: Verminderte Fähigkeit, allein zu bleiben oder Aktivitäten ohne Beobachtung auszuführen.
- Autonomie: Verminderte Fähigkeit, frei zu denken, zu kommunizieren oder zu handeln, ohne Angst vor Überwachung oder Beurteilung.
- Sicherheit: Erhöhtes Risiko von Stalking, Belästigung, Nötigung oder körperlichem Schaden.

Ob eine Datenschutzbedrohung zu einem inakzeptablen Datenschutzrisiko führt, hängt vom Kontext ab, einschließlich der Wahrscheinlichkeit und Schwere des Schadens, sowie dem Bewusstsein, den Erwartungen und der Einwilligung des Einzelnen. Zum Beispiel kann ein Nutzer wissentlich bestimmten Formen der Überwachung im Austausch für einen Dienst zustimmen. Die zugrunde liegende Datenschutzbedrohung (wie Überwachung) besteht weiterhin, aber der Einzelne kann das damit verbundene Risiko unter diesen Umständen als akzeptabel betrachten.

## Fragen der Bedrohungsmodellierung

Die Datenschutz-Bedrohungsmodellierung folgt denselben vier Fragen wie die Sicherheitsbedrohungsmodellierung, konzentriert sich jedoch darauf, Risiken für die Privatsphäre der Menschen zu identifizieren und zu reduzieren. Die Fragen basieren auf dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/).

1. [Woran arbeiten wir?](/de/docs/Web/Security/Threat_modeling#1._what_are_we_working_on)
2. [Was kann schiefgehen?](/de/docs/Web/Security/Threat_modeling#2._what_can_go_wrong)
3. [Was werden wir dagegen tun?](/de/docs/Web/Security/Threat_modeling#3._what_are_we_going_to_do_about_it)
4. [Haben wir gute Arbeit geleistet?](/de/docs/Web/Security/Threat_modeling#4._did_we_do_a_good_enough_job)

### 1. Woran arbeiten wir?

Beginnen Sie damit, die persönlichen Informationen zu identifizieren, die Ihre Anwendung verarbeitet. Dies umfasst Informationen, die Nutzer absichtlich angeben, wie Namen und E-Mail-Adressen, sowie automatisch generierte Informationen wie IP-Adressen, Cookies, Analyseereignisse oder Gerätekennungen.

Erwägen Sie, ein einfaches Datenflussdiagramm zu erstellen, das zeigt, wie persönliche Informationen durch Ihre Anwendung fließen. Fügen Sie ein, wo Daten in das System gelangen, wo sie gespeichert werden, welche Komponenten sie verarbeiten, und welche externen Dienste sie erhalten. Dieses Diagramm kann Ihnen helfen, mögliche Datenschutzbedrohungen zu identifizieren.

Fragen Sie sich:

- Welche persönlichen Informationen sammelt die Website?
- Wo werden sie gesammelt?
- Wo werden sie gespeichert?
- Wer kann darauf zugreifen?
- Welche Dritten erhalten sie?
- Wie lange werden die Informationen aufbewahrt?
- Ist jede Information tatsächlich notwendig?

### 2. Was kann schiefgehen?

Die folgenden Kategorien von Datenschutzbedrohungen sind inspiriert von etablierten Ansätzen zur Datenschutz-Bedrohungsmodellierung, einschließlich [LINDDUN](/de/docs/Web/Security/Threat_modeling/Frameworks#linddun) und [RFC6973](https://datatracker.ietf.org/doc/html/rfc6973) (Datenschutzüberlegungen für Internetprotokolle). Für jede Kategorie geben wir einige häufige Fragen und ein Beispiel-Szenario an. Nicht jede Bedrohung gilt für jede Anwendung. Verwenden Sie die folgenden Kategorien als Anhaltspunkte, während Sie jede Komponente und jeden Datenfluss in Ihrer Anwendung überprüfen. Wenn eine Frage nicht zutrifft, fahren Sie fort; wenn sie zutrifft, dokumentieren Sie die betroffenen Daten, die potenziellen Datenschutzverletzungen und mögliche Gegenmaßnahmen.

#### Überwachung

Sammeln oder Beobachten von Informationen darüber, wie Menschen Ihre Anwendung nutzen.

Fragen Sie sich:

- Können Nutzer kontinuierlich beobachtet oder verfolgt werden?
- Ist die Überwachung im Verhältnis zu ihrem beabsichtigten Zweck?

Zum Beispiel zeichnet eine E-Commerce-Website jede Mausbewegung, jedes Scroll-Ereignis, jeden Klick und jede Tastenanschläge mithilfe eines Sitzungswiederholungsdienstes auf. Obwohl dies zur Verbesserung der Benutzerfreundlichkeit gedacht ist, erfassen die Aufnahmen auch sensible Suchanfragen und teilweise ausgefüllte Formulare, wodurch Administratoren oder Drittanbieter die Browsersitzung eines Nutzers im Detail rekonstruieren können.

#### Verlinkbarkeit (Korrelation)

Kombinieren von Informationen aus verschiedenen Quellen, um ein vollständigeres Bild einer Person zu erzeugen, auch wenn deren Identität unbekannt ist.

Fragen Sie sich:

- Kann Benutzerverhalten über Dienste oder Sitzungen hinweg verknüpft werden?
- Können mehrere Datensätze kombiniert werden, um detaillierte Benutzerprofile zu erstellen?

Zum Beispiel verwendet eine Nachrichten-Website denselben Analysekennung über ihre Hauptseite, das Diskussionsforum und den Newsletter hinweg. Auch wenn sich die Nutzer nie anmelden, ermöglicht der Kennung es dem Betreiber, zu korrelieren, welche Artikel sie lesen, welche Kommentare sie posten und welche E-Mails sie öffnen, wodurch ein detailliertes Verhaltensprofil entsteht.

#### Identifizierbarkeit (Identifizierung)

Bestimmen der Identität einer Person anhand von Daten, die anonym oder pseudonym beabsichtigt waren.

Fragen Sie sich:

- Sind Pseudonyme oder Kennungen ausreichend, um Identitäten zu schützen?
- Könnten Identitäten abgeleitet werden, indem mehrere Datenquellen kombiniert werden?

Zum Beispiel veröffentlicht eine Website "anonyme" Nutzerbewertungen, enthält jedoch die Stadt, den Arbeitgeber und die Veröffentlichungsdaten jedes Bewerters. Durch den Vergleich dieser Informationen mit öffentlich verfügbaren sozialen Medienprofilen kann jemand herausfinden, wer viele der Bewertungen geschrieben hat.

#### Informationsoffenlegung

Unbefugte oder unnötige Offenlegung von persönlichen Informationen an andere Personen, Systeme oder Organisationen.

Fragen Sie sich:

- Erhalten Analyse- oder Drittanbieterdienste unnötige persönliche Informationen?
- Haben Sie Verträge mit dem Drittanbieter abgeschlossen, um sicherzustellen, dass sie die Daten pflegen und nur für die beabsichtigten Zwecke verwenden?
- Anonymisieren Sie Daten, bevor Sie sie mit dem Drittanbieter teilen?

Zum Beispiel sendet ein Kontaktformular die Namen, E-Mail-Adressen und Nachrichteninhalte der Besucher an einen Drittanbieter-Analysedienst, da der Entwickler die Analysen so konfiguriert hat, dass jede Formulareinreichung erfasst wird. Der Analysedienst erhält jetzt persönliche Informationen, die er nicht benötigt, um seinen Dienst auszuführen.

#### Sekundärverwendung

Verwendung von persönlichen Informationen für andere Zwecke als die, für die sie ursprünglich gesammelt wurden oder vernünftigerweise erwartet wurden. Auch wenn Nutzer der ursprünglichen Erhebung zugestimmt haben, erwarten sie möglicherweise nicht vernünftigerweise oder stimmen dem neuen Zweck zu.

Fragen Sie sich:

- Werden persönliche Daten für Werbung, Analysen oder Profiling wiederverwendet?
- Sind sich die Nutzer der Sekundärverwendungen ihrer Daten bewusst und können sie diese kontrollieren?

Zum Beispiel: Nutzer erstellen Konten ausschließlich, um Produkte zu kaufen. Monate später beginnt das Unternehmen, ihre Kaufhistorie zu verwenden, um ein Empfehlungsmodell zu schulen und gezielte Marketing-E-Mails zu versenden, ohne die Nutzer zu informieren oder ihnen die Möglichkeit zu geben, sich abzumelden.

#### Kompromittierung gespeicherter Daten

Unbefugter Zugriff auf oder Offenlegung von gespeicherten persönlichen Informationen aufgrund von Sicherheitsmängeln oder Datenverletzungen.

Fragen Sie sich:

- Sind persönliche Daten, Backups, Protokolle und Exporte angemessen geschützt?
- Könnte eine Datenbankverletzung oder ungewollter Zugang zu Speicher-Buckets sensible persönliche Informationen preisgeben?

Zum Beispiel speichert eine Website Benutzerprofile, Adressen und Passwort-Hashes in einem unverschlüsselten Datenbank-Backup, das versehentlich durch eine öffentlich zugängliche Cloud-Speicher-Bucket zugänglich gemacht wird. Jeder, der den Bucket entdeckt, kann den gesamten Datensatz herunterladen.

#### Mangelndes Verständnis oder Kontrolle

Einzelpersonen können nicht verstehen, beeinflussen oder kontrollieren, wie ihre persönlichen Informationen gesammelt oder verwendet werden.

Fragen Sie sich:

- Verstehen die Nutzer, welche Daten gesammelt werden und warum?
- Können Nutzer auf ihre persönlichen Daten zugreifen, diese korrigieren, exportieren oder löschen?
- Sind Einwilligung und Datenschutzentscheidungen klar und sinnvoll?

Zum Beispiel erfordert eine Website, dass Besucher alle Tracking-Cookies durch einen einzigen "Akzeptieren"-Button akzeptieren, bietet jedoch keine Erklärung, welche Daten gesammelt werden, keine Option, nicht-essentielle Cookies abzulehnen, und keine Möglichkeit, später ihre Entscheidungen zu ändern oder gesammelte Daten zu löschen.

#### Nichtabstreitbarkeit

Erstellung von Aufzeichnungen, die Handlungen oder Ansprüche dauerhaft einer Person zuweisen, wodurch deren Fähigkeit eingeschränkt wird, diese Handlungen plausibel zu leugnen.

Fragen Sie sich:

- Sind Handlungen unnötig an die Identität eines Nutzers gebunden?
- Werden Protokolle länger als nötig aufbewahrt?

Zum Beispiel speichert ein Community-Forum dauerhaft jeden Beitrag, jede Bearbeitung, IP-Adresse und Anmeldehistorie unter einem echten Namen des Nutzers, selbst nachdem das Konto gelöscht wurde. Jahre später können diese Aufzeichnungen immer noch verwendet werden, um zu beweisen, dass eine bestimmte Person spezifische Handlungen ausgeführt hat, obwohl das Behalten dieser Informationen nicht mehr notwendig ist.

Ein einzelnes Feature führt oft zu mehreren Datenschutzbedrohungen. Zum Beispiel kann das Hinzufügen eines Drittanbieter-Analyse-Skripts gleichzeitig Überwachung, Verlinkbarkeit, Informationsoffenlegung und Sekundärverwendung einführen.

### 3. Was werden wir dagegen tun?

Nachdem Sie Datenschutzbedrohungen identifiziert haben, entscheiden Sie, wie Sie auf jede Bedrohung reagieren. Einige Bedrohungen können durch eine Änderung des Designs Ihrer Anwendung beseitigt werden. Andere können durch eine Verringerung der Datenerhebung, Einschränkung des Zugangs oder durch mehr Kontrolle für die Nutzer über ihre Daten reduziert werden.

- Eliminieren: Entfernen Sie die Funktion oder Datenerhebung vollständig.
- Reduzieren: Wenden Sie technische oder organisatorische Gegenmaßnahmen an, zum Beispiel: Verschlüsseln Sie gespeicherte persönliche Daten und minimieren Sie die Protokollierung.
- Akzeptieren: Dokumentieren und akzeptieren Sie das verbleibende Datenschutzziel.

> [!NOTE]
> Die ["Transfer"-Strategie aus der Bedrohungsmodellierung für Sicherheit](/de/docs/Web/Security/Threat_modeling#3._what_are_we_going_to_do_about_it) ist oft nicht anwendbar in der Bedrohungsmodellierung für Datenschutz. Anders als bei der Sicherheitsbedrohungsmodellierung überträgt die Delegation der Datenverarbeitung an einen Dritten nicht notwendigerweise das Datenschutzziel. Während ein spezialisierter Anbieter möglicherweise bessere technische oder organisatorische Schutzmaßnahmen bietet, kann die Weitergabe von persönlichen Informationen an eine andere Organisation zusätzliche Datenschutzüberlegungen mit sich bringen.

Übliche Datenschutz-Gegenmaßnahmen umfassen:

- Sammeln Sie nur die Daten, die Sie benötigen. Vermeiden Sie die Erhebung persönlicher Informationen, die für Ihr Feature nicht notwendig sind.
- Vermeiden Sie unnötige Kennungen. Verwenden Sie, wo möglich, kurzlebige oder pseudonyme Kennungen anstelle von persistenten Kennungen.
- Begrenzen Sie das Teilen mit Dritten. Überprüfen Sie Analysen, Werbung und eingebettete Inhalte, um sicherzustellen, dass sie nur die benötigten Informationen erhalten.
- Schützen Sie persönliche Informationen in Speicherung und Übertragung. Verwenden Sie Verschlüsselung, starke Authentifizierung und Zugriffssteuerungen mit dem geringsten Privileg.
- Begrenzen Sie, wie lange Sie Daten aufbewahren. Löschen Sie persönliche Informationen, wenn sie nicht mehr benötigt werden.
- Bieten Sie Transparenz. Erklären Sie, welche Daten gesammelt werden, warum sie gesammelt werden und wer sie erhält.
- Geben Sie den Nutzern Kontrolle. Ermöglichen Sie Nutzern den Zugang, Export, die Korrektur und das Löschen ihrer Daten, wo möglich.
- Verwenden Sie datenschutzfreundliche Standardeinstellungen. Bitten Sie die Nutzer, einzuwilligen, anstatt sich abzumelden, wo es angebracht ist.
- Überprüfen Sie regelmäßig. Überprüfen Sie Ihr Datenschutz-Bedrohungsmodell regelmäßig, wenn Sie neue Funktionen oder Datenverarbeitungsaktivitäten einführen.

Diese Gegenmaßnahmen spiegeln das Prinzip des _Privatsphäre durch Design_ wider: Berücksichtigung des Datenschutzes während des gesamten Design- und Entwicklungsprozesses, anstatt ihn nach Abschluss einer Anwendung hinzuzufügen.

### 4. Haben wir gute Arbeit geleistet?

Wie bei der Sicherheit gibt es selten eine endgültige Antwort auf diese Frage. Die Bedrohungsmodellierung sollte eine kontinuierliche Aktivität sein, anstatt eine einmalige Übung. Überarbeiten Sie Ihr Datenschutz-Bedrohungsmodell, wann immer Sie:

- Neue Funktionen einführen,
- Neue Arten von persönlichen Informationen sammeln,
- Neue Drittanbieter-Dienste integrieren oder
- Wesentlich ändern, wie bestehende Informationen verarbeitet werden.

Überprüfen Sie Ihr Datenschutz-Bedrohungsmodell regelmäßig, um sicherzustellen, dass es weiterhin widerspiegelt, wie Ihre Anwendung tatsächlich persönliche Informationen handhabt.

## Siehe auch

- [Leitfaden zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Bedrohungsmodellierungs-Frameworks und -Tools](/de/docs/Web/Security/Threat_modeling/Frameworks)
- [LINDDUN](https://linddun.org)
- [RFC 6973 Datenschutzüberlegungen für Internetprotokolle](https://datatracker.ietf.org/doc/html/rfc6973)
- [Datenschutzprinzipien](https://w3ctag.github.io/privacy-principles/)
- [Datenschutzleitfaden](/de/docs/Web/Privacy/Privacy_primer)
