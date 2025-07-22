---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 0148e092e50db75e7dd065425de9e37648fa4198
---

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erläutert, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) ist mit einer bestimmten Domain und einem Schema (normalerweise `https`) verknüpft und kann auch mit Subdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}} `Domain`-Attribut gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer gerade ansieht (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als von derselben Seite wie die Seite stammend betrachtet und als _Erstanbieter-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als von derselben Seite stammend betrachtet und als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _seitenübergreifende Cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Drittanbieter-Cookies_ im Besitz eines Drittunternehmens oder einer Drittorganisation sein könnten. Das Verhalten und die potenziellen Probleme sind jedoch dieselben, unabhängig davon, ob Sie alle beteiligten Seiten besitzen oder nicht. Beispielsweise könnte eine Seite Ressourcen wie Bilder von einer anderen Domain, die sie besitzen, abrufen.

Ein Erstanbieter-Cookie kann gesetzt werden, wenn ein Benutzer zuerst eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Seite folgt oder eine Ressource anfordert, die sich auf derselben Seite befindet (zum Beispiel ein eingebettetes Bild, eine Webschriftart oder eine JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn ein Link auf einer Seite angeklickt wird, um zu einer anderen Seite zu navigieren.
- Wenn eine Seite Komponenten von anderen Seiten einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (häufig als _Drittanbieter-Inhalte_ bezeichnet). Neben der ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anforderungen generieren, die mehr Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Anklicken von Links zu anderen Seiten gesetzt werden, werden für eine Vielzahl von Zwecken verwendet. Beispielsweise könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, so dass ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Referrer zurückgezahlt werden kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungen. Beispielsweise könnten Sie ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Seiten eingebettet haben, das ein Cookie auf allen Seiten teilt, um zu bestätigen, dass der Benutzer angemeldet ist, sodass er sich nicht erneut auf jeder Seite anmelden muss.

Weitere Anwendungsfälle für Drittanbieter-Cookies sind:

- Teilen von Benutzervorlieben oder Themeninformationen über mehrere Seiten hinweg.
- Sammeln von Analysen über mehrere Seiten hinweg.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen relevantere Anzeigen anzeigen zu lassen.

Lassen Sie uns das oben erwähnte Beispiel des Anmelde-Widgets mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), Diskussionsforen der Community (`forum.site`) und Kundenservice und Rücksendungen (`service.site`) hat.

Jede der drei Seiten hat ein eingebettetes Anmelde-Widget, das auf `auth.site` gehostet wird, um den Anmeldestatus über die Seiten hinweg aufrechtzuerhalten. Ein Benutzer kann sich auf einer dieser Seiten anmelden und dabei ein Cookie im Browser für `auth.site` erstellen, das eine Sitzungs-ID enthält. Wenn der Benutzer zu einer der anderen Seiten geht, hat die eingebettete Instanz von `auth.site` Zugriff auf das Cookie mit der Sitzungs-ID, das beim ersten Anmelden des Benutzers gesetzt wurde. Es kann dieses an den Server senden, überprüfen, ob es noch gültig ist, und sich sofort auf dieser Seite anmelden.

![visuelle Darstellung des oben beschriebenen Drittanbieter-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was sind die Probleme mit Drittanbieter-Cookies?

Die oben genannten Anwendungsfälle klingen an sich harmlos. Drittanbieter-Cookies können jedoch auch ohne die Zustimmung des Benutzers für illegitime Zwecke verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Der Aufruf eines Drittanbieter-Links oder die Interaktion mit Drittanbieter-Inhalten, die in einem `<iframe>` eingebettet sind (zum Beispiel das Ausfüllen eines Formulars oder Klicken auf einen Button), könnte dazu führen, dass Cookies gesetzt werden, die die Informationen eines Benutzers in die Hände von un erwarteten Personen legen. Diese Informationen könnten verwendet werden, um:

- Benutzer mit gezielten Anzeigen im Web zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die den Affiliate-Umsatz erhöhen oder Statistiken manipulieren.

Einzeln betrachtet sind solche Fälle schlimm genug, aber es kommt noch schlimmer. Drittanbieter-Server können Informationen aus verschiedenen über unterschiedliche Seiten gesetzten Drittanbieter-Cookies, in denen Drittanbieter-Inhalte eingebettet sind, kombinieren, um ein detailliertes Profil des Browserverlaufs, der Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um unangenehme, invasive Benutzererlebnisse zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerinformationen, die auf illegale Weise gewonnen wurden, werden oft an andere Drittparteien verkauft, was das Problem weiter vergrößert.

Gesetze wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben dabei geholfen, indem sie es zu einer rechtlichen Verpflichtung gemacht haben, dass Unternehmen transparent über die von ihnen gesetzten Cookies und die gesammelten Informationen sind. Beispiele sind das Bitten der Kunden, ihre Zustimmung zu einer solchen Datensammlung zu geben, ihnen zu erlauben, zu sehen, welche Daten ein Unternehmen über sie hat, und diese Daten zu löschen, falls sie es wünschen. Es ist jedoch für Kunden nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browser-Anbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode integriert haben, um langjährige Drittanbieter-Cookie-Probleme mit beliebten Websites zu umgehen.

- Firefox aktiviert [Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), wenn der [Erweiterte Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) aktiviert ist, was standardmäßig der Fall ist. Dies gibt Drittanbieter-Cookies ein separates Cookie-Glas pro Seite und verhindert seitenübergreifendes Tracking.
- Safari hat auch eine ähnliche [Politik zur Vermeidung von Tracking](https://webkit.org/tracking-prevention-policy/); das Befolgen dieser Richtlinien hat zu einem ähnlichen Satz von Drittanbieter-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; Details finden Sie unter [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP).
- Zum Zeitpunkt des Schreibens blockiert Google Chrome standardmäßig nur Drittanbieter-Cookies im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass Drittanbieter-Cookies jederzeit blockiert werden, wenn sie dies über `chrome://settings` wünschen. Google hat damit begonnen, für einen begrenzten Prozentsatz der Chrome-Nutzer Drittanbieter-Cookies zu deaktivieren, um die Auswirkungen zu testen, während sie gleichzeitig Technologien entwickeln, um zentrale Anwendungsfälle ohne Drittanbieter-Cookies zu ermöglichen. Einzelheiten hierzu finden Sie unter [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).
- Edge blockiert Tracker von unbesuchten Websites und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens beginnen Microsoft auch zu überprüfen, ob Drittanbieter-Cookies standardmäßig in Edge blockiert werden. Weitere Informationen finden Sie unter [Verhinderung von Tracking](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention).
- Der [Brave-Browser](https://brave.com/) blockiert standardmäßig Tracking-Cookies.

Es ist möglich, die Verwendung von Drittanbieter-Cookies in Firefox über die Browsereinstellungen fallweise zu erlauben. In Safari ist die Kontrolle jedoch eingeschränkter — Sie können die seitenübergreifende Tracking-Verhinderung ausschalten, aber der Zugriff auf Drittanbieter-Cookies je Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erlaubt werden.

> [!NOTE]
> Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch Browser-Erweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie soziale Medien-Widgets) nicht wie beabsichtigt funktionieren. Während Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu verringern: siehe [Ersetzen von Drittanbieter-Cookies](#ersetzen_von_drittanbieter-cookies).

## Verwendung von Drittanbieter-Cookies

### Aktivieren von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern zu spezifizieren, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, keine Drittanbieter-Cookies zu senden, außer wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Seite navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer zu Ihrer Seite von einer anderen Seite navigiert, um beispielsweise das Erlebnis sofort zu personalisieren, sobald er dort ankommt.

Es ist jedoch keine gute Lösung, wenn Sie seitenübergreifende Inhalte über mehrere Seiten hinweg innerhalb von `<iframe>`s einbetten und auf Drittanbieter-Cookies für Funktionalität angewiesen sind, beispielsweise im Fall des oben erwähnten Anmeldebeispiels. In solchen Fällen müssen Sie ausdrücklich `SameSite=None` setzen, um dem Browser zu erlauben, diese Cookies herumzureichen:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den JavaScript-Zugriff auf das Cookie (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)) zu deaktivieren. Cookies, die sensible Informationen enthalten, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre äußerst unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS)) Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten ebenfalls eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um Websites dabei zu helfen, Unterbrechungen in Browsern, in denen Drittanbieter-Cookies blockiert sind, zu minimieren:

1. Überprüfen Sie Ihre Drittanbieter-Cookie-Nutzung. Cookies müssen das `SameSite=None`-Attribut haben, um im seitenübergreifenden Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie in Ihrem Code nach `SameSite=None` suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser-DevTools überprüfen, beispielsweise im [Firefox-Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issues-Panel](https://developer.chrome.com/docs/devtools/issues/) berichtet auch [über Probleme mit Drittanbieter-Cookie-Blockierung](https://privacysandbox.google.com/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität, wenn Drittanbieter-Cookies blockiert sind, um zu sehen, was schiefgeht. Sie könnten feststellen, dass einige Cookies nicht mehr benötigt werden.
3. Zumindest anfänglich könnten Sie Ihren Code robuster gestalten, sodass er eine weniger personalisierte Erfahrung bietet, wenn Drittanbieter-Cookie-Daten nicht verfügbar sind, anstatt ihn insgesamt zum Scheitern zu kommen. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "graceful degradation")}}.
4. Sammeln Sie Daten auf alternative Weise, wie zum Beispiel durch Benutzerbefragungen oder -quiz, oder schauen Sie sich Daten an, die Sie bereits haben, um Trends abzuleiten (zum Beispiel Bestellhistorien von Produkten).
5. Verwenden Sie einen alternativen client-seitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten dauerhaft zu speichern, oder erwägen Sie eine server-seitige Lösung.
6. Wenn Ihre Drittanbieter-Cookies nur auf einer kleinen Anzahl verwandter, bekannter Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um einen seitenübergreifenden Cookie-Zugriff nur für diese spezifischen Seiten zu ermöglichen. Die Storage Access API fordert den Nutzer auf, eine Berechtigung zu erteilen, damit eine Seite Drittanbieter-Cookies auf Basis einzelner Frames verwenden kann.
   - Wenn Sie bereits eine Lösung mit der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, um Ihre Implementierung mit dem Verhalten von Chrome zu überprüfen, das in Version 119 aktualisiert wurde, um volle Unterstützung zu bieten.
   - Related Website Sets können als progressive Erweiterung der Storage Access API angesehen werden: Die API kann auf die gleiche Weise verwendet werden, aber Websites im Set werden Benutzer nicht auffordern, die Erlaubnis zum Zugriff auf Drittanbieter-Cookies zu erteilen.
7. Wenn Ihre Drittanbieter-Cookies 1:1 mit den Top-Level-Sites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies with Independent Partitioned State](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch bekannt als opt-in partitionierte Cookies) verwenden, um Ihre Cookies für partitionierten Speicher mit einem separaten Cookie-Glas pro Top-Level-Site zu optieren. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren vorhandenen seitenübergreifenden Cookies. Sie können dann uneingeschränkt verwendet werden, können jedoch nicht mit anderen Seiten geteilt werden.

## Ersetzen von Drittanbieter-Cookies

Mehrere Funktionen stehen Entwicklern zur Verfügung, die die Verwendung von Drittanbieter-Cookies einstellen möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle umsetzen. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, aber es lohnt sich, sie zu betrachten, während Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können beginnen, die verschiedenen Funktionen, die im [Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox) Projekt von Google verfügbar sind, zu erkunden, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und ausschließlich in Chromium verfügbar):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern erlauben, sich bei mehreren Websites und Diensten anzumelden.
- [Private State Tokens](https://privacysandbox.google.com/protections/private-state-tokens): Ermöglicht Betrugs- und Spamschutz, indem begrenzte, nicht identifizierende Informationen zwischen Websites ausgetauscht werden.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und Personalisierung von Inhalten.
- [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience): Verwenden von Daten einer App oder Website, um eine Anzeige auszuwählen, wenn der Benutzer eine andere App oder Website besucht.
- [Attribution Reporting API](https://privacysandbox.google.com/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und Conversions.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
