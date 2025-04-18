---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) ist mit einer bestimmten Domain und einem bestimmten Schema (normalerweise `https`) verbunden und kann auch mit Subdomains assoziiert werden, wenn das {{HTTPHeader("Set-Cookie")}}-Attribut `Domain` gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer ansieht (die URL in der Adressleiste des Browsers), wird das Cookie als vom selben Standort wie die Seite stammend angesehen und als _Erstanbieter-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als vom selben Standort stammend angesehen und als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _cross-site cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Drittanbieter-Cookies_ auf eine Zugehörigkeit zu einem Drittunternehmen oder einer Drittorganisation hindeuten. Das Verhalten und die potenziellen Probleme sind jedoch gleich, unabhängig davon, ob Sie alle beteiligten Seiten besitzen oder nicht. Zum Beispiel könnte eine Seite auf Ressourcen wie Bilder von einer anderen Domain zugreifen, die sie besitzt.

Ein Erstanbieter-Cookie kann gesetzt werden, wenn ein Benutzer eine Seite zum ersten Mal besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource anfordert, die sich auf derselben Seite befindet (zum Beispiel ein eingebettetes Bild, eine Web-Schriftart oder eine JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden allgemeinen Situationen gesendet:

- Wenn ein Link auf einer Seite angeklickt wird, um zu einer anderen Seite zu navigieren.
- Wenn eine Seite Komponenten von anderen Seiten einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oft als _Drittanbieter-Inhalt_ bezeichnet). Neben der ursprünglichen Anfrage für die Komponente können diese Komponenten weitere Anfragen generieren, die weitere Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Klick auf Links zu anderen Seiten gesetzt werden, werden für eine Vielzahl von Zwecken verwendet. Zum Beispiel könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision dem Referrer zurückgezahlt werden kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungen. Zum Beispiel könnten Sie ein Anmelde-Widget haben, das auf mehreren unterschiedlichen, aber verwandten Seiten eingebettet ist und ein Cookie über alle Websites teilt, das bestätigt, dass der Benutzer angemeldet ist, damit er sich nicht auf jeder Seite erneut anmelden muss.

Andere Anwendungsfälle für Drittanbieter-Cookies sind:

- Teilen von Benutzereinstellungen oder Themeninformationen über mehrere Seiten hinweg.
- Sammeln von Analysen über mehrere Websites hinweg.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben erwähnte Anmelde-Widget-Beispiel mit einer fiktiven Firma weiter illustrieren, die separate Domains für ihren Online-Shop (`shop.site`), Community-Diskussionsforen (`forum.site`) und Kundenservice und Retouren (`service.site`) hat.

Jede der drei Seiten hat ein eingebettetes Anmelde-Widget, das unter `auth.site` gehostet wird, um den Anmeldestatus auf den Seiten zu erhalten. Ein Benutzer kann sich auf eine dieser Seiten anmelden und ein Cookie im Browser für `auth.site` erstellen, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Seiten geht, hat die eingebettete Instanz von `auth.site` Zugriff auf das Sitzungs-ID-Cookie, das beim Anmelden auf der ersten Seite gesetzt wurde. Es kann es an den Server senden, prüfen, ob es noch gültig ist, und den Benutzer sofort auf dieser Seite anmelden.

![Visuelle Darstellung der oben beschriebenen Drittanbieter-Anmeldungssystembeschreibung](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Jedoch können Drittanbieter-Cookies auch ohne Einwilligung der Benutzer für illegitime Zwecke verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einem Drittanbieter oder die Interaktion mit Drittanbieter-Inhalten, die in einem `<iframe>` eingebettet sind (zum Beispiel das Ausfüllen eines Formulars oder das Klicken eines Buttons), könnte zur Folge haben, dass Cookies gesetzt werden, die die Benutzerinformationen in die Hände von jemandem bringen, den sie nicht erwartet haben. Diese Informationen könnten verwendet werden, um:

- Benutzer im Internet mit gezielter Werbung zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten so zu manipulieren, dass sie bestimmte Optionen auswählen, die den Affiliate-Umsatz erhöhen oder die Statistiken manipulieren.

Einzeln betrachtet sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies kombinieren, die über verschiedene eingebettete Seiten hinweg gesetzt sind, um ein detailliertes Profil der Browsing-Historie, Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann genutzt werden, um unheimliche, invasive Benutzererlebnisse zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerdaten, die auf illegitime Weise gewonnen werden, werden auch oft an andere Dritte verkauft, was das Problem weiter vervielfacht.

Gesetzgebung wie die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben dazu beigetragen, indem sie Unternehmen gesetzlich verpflichten, transparent über die gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele sind die Aufforderung an Kunden, der Datensammlung zuzustimmen, ihnen die Möglichkeit zu geben, zu sehen, welche Daten ein Unternehmen über sie speichert, und die Daten bei Bedarf zu löschen. Dennoch ist es für die Kunden nicht immer klar, wie ihre Daten genutzt werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browseranbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher alle damit begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie gleichzeitig Ausnahmen und Heuristiken in ihren Quellcode integrieren, um langjährige Probleme mit Drittanbieter-Cookies auf beliebten Websites zu umgehen.

- Die [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) von Mozilla hat dazu geführt, dass Firefox standardmäßig Drittanbieter-Cookies von bekannten Trackern blockiert (siehe [Firefox-Tracking-Schutz](/de/docs/Web/Privacy/Guides/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Der Erweiterte Tracking-Schutz kann auf Standard, Streng oder Benutzerdefiniert eingestellt werden. Der [Standardmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert den [kompletten Cookie-Schutz](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), der Drittanbieter-Cookies ein separates Cookie-Glas pro Seite gibt, wodurch ein Tracking über mehrere Seiten verhindert wird. Im [Strengmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Drittanbieter-Cookies.
- Apple hat ebenfalls eine ähnliche [Tracking-Verhinderungsrichtlinie](https://webkit.org/tracking-prevention-policy/); diese hat zu einem ähnlichen Satz von Drittanbieter-Cookie-Schutzvorkehrungen geführt, die standardmäßig aktiviert sind; siehe [Intelligente Tracking-Verhinderung](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Einzelheiten.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome standardmäßig nur Drittanbieter-Cookies im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass Drittanbieter-Cookies jederzeit blockiert werden, wenn sie dies über `chrome://settings` wünschen. Google hat begonnen, Drittanbieter-Cookies für einen begrenzten Prozentsatz der Chrome-Nutzer zu deaktivieren, um die Auswirkungen zu testen, die das haben wird, während gleichzeitig Technologien entwickelt werden, um wichtige Anwendungsfälle ohne Drittanbieter-Cookies zu ermöglichen. Siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies) für Einzelheiten.
- Edge blockiert Tracker von unbesuchten Seiten und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens erkundet Microsoft auch, Drittanbieter-Cookies standardmäßig in Edge zu blockieren. Siehe [Tracking-Prävention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) für weitere Informationen.
- Der [Brave-Browser](https://brave.com/) blockiert standardmäßig Tracking-Cookies.

Es ist möglich, die Nutzung von Drittanbieter-Cookies in Firefox fallweise über die Browsereinstellungen zu erlauben. In Safari hingegen sind die Kontrollmöglichkeiten begrenzter — Sie können die Seitenübergreifende Tracking-Verhinderung ausschalten, aber der Zugriff auf Drittanbieter-Cookies pro Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfolgen.

> [!NOTE]
> Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch Browser-Erweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie soziale Medien-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, Wege zu suchen, um ihre Abhängigkeit von ihnen zu reduzieren: siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).

## Verwendung von Drittanbieter-Cookies

### Aktivieren von Drittanbieter-Cookies mit `SameSite`

Das Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) ermöglicht es Servern zu spezifizieren, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` in Ihren `Set-Cookie`-Headern nicht angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, Drittanbieter-Cookies nicht zu senden, es sei denn, der Benutzer navigiert von einer anderen Seite zur Ursprungsseite des Cookies. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Seite zu Ihrer Seite navigiert, um zum Beispiel die Erfahrung sofort zu personalisieren, sobald er dort ankommt.

Es ist jedoch unbrauchbar, wenn Sie Seitenübergreifende Inhalte über mehrere Seiten hinweg in `<iframe>`s einbetten möchten und auf Drittanbieter-Cookies für die Funktionalität angewiesen sind, zum Beispiel im Fall des oben besprochenen Anmelde-Beispiels. In solchen Fällen müssen Sie explizit `SameSite=None` setzen, um es dem Browser zu ermöglichen, diese Cookies zu übertragen:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das Attribut `Secure` gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. In dem obigen Beispiel haben wir auch das Attribut `HttpOnly` gesetzt, um den JavaScript-Zugriff auf das Cookie zu deaktivieren (z. B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen beibehalten, sollten immer das Attribut `HttpOnly` gesetzt haben — es wäre wirklich unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme trägt dazu bei, Cross-Site-Scripting-Angriffe ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) abzuschwächen.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten ebenfalls eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um zu helfen, Probleme auf Seiten zu minimieren, bei denen Drittanbieter-Cookies blockiert werden:

1. Überprüfen Sie Ihre Verwendung von Drittanbieter-Cookies. Cookies müssen das Attribut `SameSite=None` gesetzt haben, um in einem Seitenübergreifenden Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie in Ihrem Code nach `SameSite=None` suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser-Entwicklungstools überprüfen, zum Beispiel im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issues panel](https://developer.chrome.com/docs/devtools/issues/) berichtet auch über [Probleme mit dem Blockieren von Drittanbieter-Cookies](https://privacysandbox.google.com/cookies/prepare/audit-cookies#chrome-dev-tools) sowie eine Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Drittanbieter-Cookies, um zu sehen, was kaputtgeht. Sie könnten feststellen, dass einige Cookies nicht mehr benötigt werden.
3. Zunächst einmal könnten Sie Ihren Code robuster machen, damit er eine weniger personalisierte Erfahrung bietet, wenn Drittanbieter-Cookie-Daten nicht verfügbar sind, anstatt sie vollständig zu brechen. Befolgen Sie die Prinzipien der {{Glossary("Graceful_degradation", "graceful degradation")}}.
4. Sammeln Sie Daten über alternative Mittel wie Benutzerumfragen oder Quiz oder betrachten Sie die Daten, die Sie bereits haben, um Trends abzuleiten (zum Beispiel Produktbestellhistorien).
5. Verwenden Sie einen alternativen client-seitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder bedenken Sie eine serverseitige Lösung.
6. Wenn Ihre Drittanbieter-Cookies nur über eine geringe Anzahl verwandter, bekannter Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um nur für diese spezifischen Websites den Zugriff auf Drittanbieter-Cookies über Seiten hinweg zu ermöglichen. Storage Access fordert den Benutzer auf, eine Erlaubnis zu geben, damit eine Website Drittanbieter-Cookies auf einer Pro-Frame-Basis verwenden kann.
   - Wenn Sie bereits eine Lösung mit der Storage Access API für Firefox oder Safari implementiert haben, ist jetzt ein guter Zeitpunkt, Ihre Implementierung im Vergleich zum Verhalten von Chrome zu überprüfen, das in Version 119 eine vollständige Unterstützung erhalten hat.
   - Related Website Sets kann als progressive Verbesserung der Storage Access API betrachtet werden: Die API kann auf die gleiche Weise verwendet werden, aber Websites im Set fordern die Benutzer nicht um Erlaubnis, Drittanbieter-Cookies zu verwenden.
7. Wenn Ihre Drittanbieter-Cookies eins-zu-eins mit den Top-Level-Seiten verwendet werden, auf denen sie generiert wurden, könnten Sie [Partitionierte Cookies](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch bekannt als partitionierte Cookies) verwenden, um Ihre Cookies in einen partitionierten Speicher mit einem separaten Cookie-Glas pro Top-Level-Seite zu optieren. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren bestehenden seitenübergreifenden Cookies. Sie können dann uneingeschränkt verwendet werden, können aber nicht mit anderen Seiten geteilt werden. Beachten Sie, dass CHIPS derzeit nur in Chromium verfügbar ist.

## Ersetzen von Drittanbieter-Cookies

Es stehen mehrere Funktionen für Entwickler zur Verfügung, die die Nutzung von Drittanbieter-Cookies einstellen möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle implementieren. Einige dieser Funktionen befinden sich in einer frühen experimentellen Phase, sind jedoch eine Überlegung wert, wenn Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können beginnen, die verschiedenen Funktionen im [Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox) Projekt von Google zu erkunden, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur in Chromium):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die Benutzern das Anmelden bei mehreren Websites und Diensten ermöglichen.
- [Private State Tokens](https://privacysandbox.google.com/protections/private-state-tokens): Ermöglicht Betrugs- und Spam-Schutz durch den Austausch eingeschränkter, nicht identifizierender Informationen über Websites hinweg.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und inhaltsbasierte Personalisierung.
- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience): Verwendet Daten von einer App oder Website, um bei einem Besuch einer anderen App oder Website eine Anzeige auszuwählen.
- [Attribution Reporting API](https://privacysandbox.google.com/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und Konversionen.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
