---
title: Third-Party-Cookies
slug: Web/Privacy/Third-party_cookies
l10n:
  sourceCommit: 83452bc56b8e8f3e67d700fa273cc90df3554824
---

{{QuicklinksWithSubPages("Web/Privacy")}}

Dieser Artikel erklärt, was Third-Party-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Third-Party-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Cookies) ist mit einer bestimmten Domain und einem Schema (normalerweise `https`) verbunden und kann auch mit Subdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}} `Domain`-Attribut gesetzt ist.

- Wenn das Cookie-Domain und -Schema mit der aktuellen Seite übereinstimmen, die der Benutzer betrachtet (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als vom selben Standort wie die Seite stammend betrachtet und als _First-Party-Cookie_ bezeichnet.
- Wenn sich die Domain und das Schema unterscheiden, wird das Cookie nicht als vom selben Standort stammend betrachtet und als _Third-Party-Cookie_ bezeichnet.

> [!NOTE]
> Third-Party-Cookies werden manchmal als _Cross-Site-Cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Third-Party-Cookies_ eine Zugehörigkeit zu einem Drittunternehmen oder einer Drittorganisation implizieren. Das Verhalten und die potenziellen Probleme sind jedoch unabhängig davon gleich, ob Sie alle beteiligten Sites besitzen oder nicht. Beispielsweise könnte eine Site Ressourcen wie Bilder von einer anderen Domain, die sie besitzen, abrufen.

Ein First-Party-Cookie kann gesetzt werden, wenn ein Benutzer erstmals eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Site folgt oder eine Ressource anfordert, die sich auf derselben Site befindet (z. B. ein eingebettetes Bild, Webfont oder eine JavaScript-Datei).

Third-Party-Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn ein Link auf einer Site angeklickt wird, um zu einer anderen Site zu navigieren.
- Wenn eine Seite Komponenten von anderen Sites einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oft als _Third-Party-Content_ bezeichnet). Diese Komponenten können neben der ursprünglichen Anforderung einer Komponente zusätzliche Anforderungen generieren, die weitere Third-Party-Cookies setzen.

## Wofür werden Third-Party-Cookies verwendet?

Third-Party-Cookies, die beim Klicken auf Links zu anderen Sites gesetzt werden, dienen verschiedenen Zwecken. Beispielsweise könnten Sie einen Affiliate-Link zu einer Partner-Site haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, sodass ein Belohnungs-Banner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird oder eine Provision an den Referrer zurückgezahlt werden kann.

Third-Party-Content, der Cookies setzt, hat ebenfalls viele verschiedene Verwendungen. Beispielsweise könnten Sie ein Anmelde-Widget auf mehreren, unterschiedlichen, aber verwandten Sites eingebettet haben, das ein Cookie auf allen Sites teilt, um zu bestätigen, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Site erneut anmelden muss.

Weitere Anwendungsfälle für Third-Party-Cookies umfassen:

- Teilen von Benutzerpräferenzen oder Theme-Informationen über mehrere Sites hinweg.
- Sammeln von Analysen über mehrere Sites hinweg.
- Zählen von Anzeigeneindrücken und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben erwähnte Anmelde-Widget-Beispiel mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), Community-Foren (`forum.site`) und Kundenservice und Retouren (`service.site`) hat.

Jede der drei Sites verfügt über ein eingebettetes Anmelde-Widget, das bei `auth.site` gehostet wird, um den Anmeldestatus über Sites hinweg aufrechtzuerhalten. Ein Benutzer kann sich auf einer dieser Sites anmelden, wodurch ein Cookie im Browser für `auth.site` mit einer Sitzungs-ID gesetzt wird. Wenn der Benutzer zu einer der anderen Sites geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das bei der Anmeldung auf der ersten Site gesetzte Sitzungs-ID-Cookie. Es kann dieses an den Server senden, überprüfen, ob es noch gültig ist, und sich sofort auf dieser Site anmelden.

![visuelle Darstellung der oben beschriebenen Third-Party-Anmeldesystembeschreibung](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Third-Party-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Third-Party-Cookies können jedoch auch für illegitime Zwecke ohne Zustimmung des Benutzers verwendet werden, die technisch nicht von legitimen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einer Drittanbieter-Site oder die Interaktion mit von Drittanbietern eingebettetem Content in einem `<iframe>` (zum Beispiel durch das Ausfüllen eines Formulars oder das Klicken auf einen Button) könnte zu gesetzten Cookies führen, die Benutzerinformationen in die Hände von Personen legen, die sie nicht erwartet hätten. Diese Informationen könnten genutzt werden, um:

- Benutzer im Web mit gezielter Werbung zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die Affiliate-Einnahmen erhöhen oder Statistiken manipulieren.

Einzeln sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren auf verschiedenen Sites gesetzten Third-Party-Cookies kombinieren, auf denen der Dritt-Content eingebettet ist, um ein detailliertes Profil der Browserverläufe, Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um unheimliche, invasive Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Third-Party-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerinformationen, die auf illegitime Weise gewonnen werden, werden oft auch an andere Dritte verkauft, was das Problem weiter multipliziert.

Gesetzgebungen wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie es Unternehmen zur gesetzlichen Pflicht gemacht haben, transparent über die von ihnen gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele beinhalten, dass Kunden in eine solche Datenerhebung einwilligen müssen, ihnen die Möglichkeit gegeben wird, zu sehen, welche Daten ein Unternehmen über sie hat, und die Daten zu löschen, wenn sie es wünschen. Dennoch ist es für Kunden nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Third-Party-Cookies um?

Browseranbieter wissen, dass Benutzern das oben beschriebene Verhalten nicht gefällt, und haben alle damit begonnen, Third-Party-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode aufnehmen, um langwierige Third-Party-Cookie-Probleme mit beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Third-Party-Cookies von bekannten Trackern standardmäßig blockiert (siehe [Tracking-Schutz in Firefox](/de/docs/Web/Privacy/Firefox_tracking_protection) und [Verbesserter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Der verbesserte Tracking-Schutz kann auf Standard, Streng oder Benutzerdefiniert eingestellt werden. Der [Standardmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert [Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), das Third-Party-Cookies ein separates Cookie-Jar pro Site gibt, wodurch Cross-Site-Tracking verhindert wird. Im [Strengen Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Third-Party-Cookies.
- Apple hat ebenfalls eine ähnliche [Tracking-Präventionsrichtlinie](https://webkit.org/tracking-prevention-policy/); die Befolgung dieser Richtlinie hat zu einem ähnlichen Satz von Third-Party-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome standardmäßig nur Third-Party-Cookies im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass es Third-Party-Cookies die ganze Zeit über blockiert, wenn sie über `chrome://settings` möchten. Google hat begonnen, Third-Party-Cookies für einen begrenzten Prozentsatz der Chrome-Benutzer zu deaktivieren, um die Auswirkungen zu testen, während sie gleichzeitig Technologien entwickeln, die es ermöglichen, wichtige Anwendungsfälle ohne Third-Party-Cookies umzusetzen. Siehe [Ersetzen von Third-Party-Cookies](#ersetzen_von_third-party-cookies) für Details.
- Edge blockiert Tracker von nicht besuchten Sites und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens beginnt Microsoft ebenfalls zu erkunden, Third-Party-Cookies in Edge standardmäßig zu blockieren. Siehe [Tracking-Prävention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) für weitere Informationen.
- Der [Brave-Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Nutzung von Third-Party-Cookies in Firefox über die Browsereinstellungen fallweise zuzulassen. In Safari ist die Kontrolle jedoch stärker eingeschränkt — Sie können das Cross-Site-Tracking-Prävention ausschalten, aber den Zugriff auf Third-Party-Cookies pro Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erfolgen.

> [!NOTE]
> Third-Party-Cookies (oder einfach Tracking-Cookies) können auch durch Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Third-Party-Komponenten (wie soziale Medien-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Third-Party-Cookies durchsetzen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu verringern: siehe [Ersetzen von Third-Party-Cookies](#ersetzen_von_third-party-cookies).

## Verwendung von Third-Party-Cookies

### Aktivieren von Third-Party-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern anzugeben, ob/wann Third-Party-Cookies gesendet werden. Wenn Sie `SameSite` in Ihren `Set-Cookie`-Headern nicht angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, keine Third-Party-Cookies außer, wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Site navigiert, zu senden. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Site zu Ihrer Site navigiert, um zum Beispiel die Erfahrung sofort zu personalisieren, sobald er dort ankommt.

Dies ist jedoch nicht geeignet, wenn Sie Cross-Site-Content über mehrere Sites innerhalb von `<iframe>`s einbetten und für die Funktionalität auf Third-Party-Cookies angewiesen sind, wie im Fall des zuvor betrachteten Anmelde-Beispiels. In solchen Fällen müssen Sie `SameSite=None` ausdrücklich setzen, um dem Browser zu ermöglichen, diese Cookies weiterzugeben:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den JavaScript-Zugriff auf das Cookie zu deaktivieren (z. B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen speichern, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre sehr unsicher, diese JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme trägt dazu bei, Cross-Site Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe zu entschärfen.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Third-Party-Cookies

Es gibt mehrere Strategien, um Sites zu helfen, Brüche in Browsern zu minimieren, in denen Third-Party-Cookies blockiert sind:

1. Prüfen Sie Ihren Third-Party-Cookie-Einsatz. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Third-Party-Cookies identifizieren, indem Sie in Ihrem Code nach `SameSite=None` suchen oder indem Sie in Ihren browser-DevTools nach gespeicherten `SameSite=None`-Cookies suchen, zum Beispiel im [Storage-Inspektor in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issues-Panel](https://developer.chrome.com/docs/devtools/issues/) [meldet ebenfalls Probleme mit der Blockierung von Third-Party-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Third-Party-Cookies, um zu sehen, was nicht funktioniert. Sie könnten feststellen, dass einige Cookies nicht mehr benötigt werden.
3. Machen Sie Ihren Code zunächst robuster, sodass er eine weniger personalisierte Erfahrung bietet, wenn Third-Party-Cookiedaten nicht verfügbar sind, anstatt ganz aufzuhören zu funktionieren. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "gradualen Degradation")}}.
4. Sammeln Sie Daten auf alternative Weise, z. B. durch Benutzerumfragen oder Quizze, oder überprüfen Sie vorhandene Daten, um Trends zu erkennen (z. B. Produktbestellverläufe).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) zur Datenpersistenz oder ziehen Sie eine serverseitige Lösung in Betracht.
6. Wenn Ihre Third-Party-Cookies nur über eine kleine Anzahl von verwandten, bekannten Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um nur für diese spezifischen Sites Zugriff auf Cross-Site-Cookies zu ermöglichen. Der Storage Access fordert den Benutzer auf, die Erlaubnis zu erteilen, dass eine Site Third-Party-Cookies pro Frame verwenden darf.
   - Wenn Sie bereits eine Lösung mithilfe der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, Ihre Implementierung mit dem Verhalten von Chrome zu überprüfen, das in Version 119 vollständige Unterstützung erhielt.
   - Related Website Sets können als progressive Verbesserung der Storage Access API betrachtet werden: Die API kann auf genau dieselbe Weise verwendet werden, aber Sites im Set bitten Benutzer nicht um Erlaubnis, Zugang zu Third-Party-Cookies zu erhalten.
7. Wenn Ihre Third-Party-Cookies auf 1:1-Basis mit den oberen Ebenen der Sites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies, die einen unabhängigen partitionierten Zustand haben](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch partitionierte Cookies genannt) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Jar pro oberster Site aufzunehmen. Dies erfordert lediglich das Hinzufügen des `partitioned`-Attributs zu Ihren vorhandenen Cross-Site-Cookies. Sie können dann uneingeschränkt verwendet werden, können jedoch nicht mit anderen Sites geteilt werden. Beachten Sie, dass CHIPS derzeit nur auf Chromium beschränkt ist.

## Ersetzen von Third-Party-Cookies

Entwicklern stehen mehrere Funktionen zur Verfügung, die Third-Party-Cookies nicht mehr verwenden möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle implementieren. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, aber sie sind es wert, in Betracht gezogen zu werden, während Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können beginnen, die verschiedenen Funktionen zu erkunden, die im [Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox)-Projekt von Google verfügbar sind, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur für Chromium):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Sites und Diensten anzumelden.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Ermöglichen Anti-Betrug und Anti-Spam durch den Austausch begrenzter, nicht identifizierender Informationen über Sites hinweg.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbezogene Werbung und Content-Personalisierung.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Verwenden Sie Daten aus einer App oder Site, um bei einem anderen App- oder Site-Besuch eine Anzeige auszuwählen.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigeneindrücken und Conversions.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
