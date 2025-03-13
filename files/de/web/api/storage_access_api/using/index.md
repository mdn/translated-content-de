---
title: Verwendung der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten Cross-Site-Dokumenten verwendet werden, um zu überprüfen, ob sie Zugriff auf [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [nicht partitionierten Status](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) haben und, falls nicht, um Zugriff zu beantragen. Wir werden kurz ein gängiges Szenario des Speicherzugriffs betrachten.

> [!NOTE]
> Wenn wir im Kontext der Storage Access API von Third-Party-Cookies sprechen, meinen wir implizit [_nicht partitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Third-Party-Cookies.

## Nutzungshinweise

Die Storage Access API ist darauf ausgelegt, eingebettetem Inhalt die Anfrage, Zugriff auf Third-Party-Cookies und nicht partitionierten Status zu erlauben — die meisten modernen Browser blockieren diesen Zugriff standardmäßig zum Schutz der Privatsphäre der Nutzer. Da eingebetteter Inhalt nicht weiß, wie sich ein Browser diesbezüglich verhalten wird, ist es am besten, immer zu überprüfen, ob das eingebettete {{htmlelement("iframe")}} Speicherzugriff hat, bevor versucht wird, ein Cookie zu lesen oder zu schreiben. Dies gilt insbesondere für den Zugriff auf [`Document.cookie`](/de/docs/Web/API/Document/cookie), da Browser häufig ein leeres Cookie-Archiven zurückgeben, wenn der Zugriff auf Third-Party-Cookies blockiert ist.

Im folgenden Beispiel zeigen wir, wie ein eingebettetes Cross-Site-{{htmlelement("iframe")}} Zugang zu Third-Party-Cookies und nicht partitioniertem Status unter einer Browser-Speicherzugriffspolitik erhalten kann, die sonst den Zugriff blockieren würde.

## Zulassen, dass ein sandboxed `<iframe>` die API verwendet

Zuerst muss, wenn das `<iframe>` gesandboxt ist, die einbettende Website das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzufügen, um zu ermöglichen, dass Storage Access API-Anfragen erfolgreich sind, zusammen mit `allow-scripts` und `allow-same-origin`, um es zu erlauben, ein Skript auszuführen, um die API aufzurufen und im Ursprung auszuführen, der Cookies und Status haben kann:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern von Speicherzugriff

Nun zum Code, der im eingebetteten Dokument ausgeführt wird. In diesem Code:

1. Wir verwenden zuerst eine Feature-Erkennung (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Ist dies nicht der Fall, führen wir unseren Code aus, der trotzdem auf Cookies zugreift, und hoffen, dass er funktioniert. Er sollte ohnehin defensiv codiert sein, um mit solchen Eventualitäten umzugehen.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet dies, dass dieses {{htmlelement("iframe")}} bereits Zugriff erhalten hat, und wir können unseren Code, der auf Cookies und Status zugreift, sofort ausführen.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir [`Permissions.query()`](/de/docs/Web/API/Permissions/query) auf, um zu prüfen, ob die Berechtigung, auf Third-Party-Cookies und nicht partitionierten Status zuzugreifen, bereits erteilt wurde (d.h. an ein anderes gleichseitiges Embed). Wir umhüllen diesen gesamten Abschnitt in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block, weil [einige Browser unterstützen die Berechtigung `"storage-access"` nicht](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was dazu führen kann, dass der `query()`-Aufruf einen Fehler wirft. Wenn es einen Fehler wirft, melden wir dies der Konsole und versuchen trotzdem, den Cookie-Code auszuführen.
5. Wenn der Berechtigungsstatus `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Nutzer etwas Zeit spart, dann können wir unseren Code ausführen, der auf Cookies und Status zugreift.
6. Wenn der Berechtigungsstatus `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach der Nutzerinteraktion auf. Dieser Aufruf kann eine Eingabeaufforderung an den Nutzer auslösen. Wenn dieser Aufruf aufgelöst wird, können wir unseren Code ausführen, der auf Cookies und Status zugreift.
7. Wenn der Berechtigungsstatus `"denied"` ist, hat der Nutzer unseren Anfragen, auf Third-Party-Cookies oder nicht partitionierten Status zuzugreifen, abgelehnt und unser Code kann sie nicht verwenden.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> **Hinweis:** `requestStorageAccess()`-Anfragen werden automatisch verweigert, sofern der eingebettete Inhalt nicht gerade eine Benutzerinteraktion wie ein Tippen oder Klicken verarbeitet ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder wenn die Berechtigung bereits zuvor erteilt wurde. Wenn die Berechtigung zuvor nicht erteilt wurde, müssen `requestStorageAccess()`-Anfragen innerhalb eines benutzergesteuerten Ereignishandlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Das ausschließlich für Chrome verfügbare Feature [verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) kann als progressive Verbesserung angesehen werden, die neben der Storage Access API funktioniert — unterstützende Browser gewähren standardmäßigen Zugriff auf Third-Party-Cookies und nicht partitionierten Status zwischen Websites im selben Set. Dies bedeutet, dass der übliche Nutzerberechtigungsablauf nicht durchlaufen werden muss, wie oben beschrieben, was ein benutzerfreundlicheres Erlebnis für Nutzer von Websites im Set bedeutet.

## Anfordern von Speicherzugriff von der obersten Webseite im Namen eingebetteter Ressourcen

Die oben genannten Funktionen der Storage Access API ermöglichen es einem eingebetteten Dokument, den eigenen Zugriff auf Third-Party-Cookies zu beantragen. Es gibt eine zusätzliche experimentelle Methode, [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor), eine vorgeschlagene Erweiterung zur Storage Access API, die es obersten Websites ermöglicht, Speicherzugriff im Namen spezifischer verwandter Ursprünge zu beantragen.

Die `requestStorageAccessFor()`-Methode adressiert Herausforderungen bei der Übernahme der Storage Access API auf obersten Websites, die Cross-Site-Bilder oder -Skripte verwenden, die Cookies benötigen. Sie kann den Zugriff auf Third-Party-Cookies für Cross-Site-Ressourcen direkt eingebettet in die oberste Website ermöglichen, die nicht in der Lage sind, ihren eigenen Speicherzugriff zu beantragen, beispielsweise über {{htmlelement("img")}} oder {{htmlelement("script")}} Elemente.

Damit `requestStorageAccessFor()` funktioniert, müssen sowohl die aufrufende oberste Seite als auch die eingebettete Ressource, für die sie Speicherzugriff beantragt, Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sein.

Die typische Nutzung von `requestStorageAccessFor()` sieht so aus (diesmal im regulären Promise-Stil anstelle von async/await geschrieben):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Anders als bei `requestStorageAccess()` prüft Chrome bei einem Aufruf von `requestStorageAccessFor()` nicht auf eine Interaktion in einem Dokument im obersten Level innerhalb der letzten 30 Tage, da der Nutzer bereits auf der Seite ist. Siehe [Browserspezifische Variationen > Chrome](/de/docs/Web/API/Storage_Access_API#chrome) für weitere Details zu diesem Verhalten.

Beim Abfragen des Berechtigungsstatus für Speicherzugriffsanfragen, die im Namen eines anderen Ursprungs gestellt werden, wird ein anderer Berechtigungsname verwendet als beim Rest der Storage Access API: `"top-level-storage-access"` anstelle von `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um herauszufinden, ob der Ursprung zuvor die Berechtigung erhalten hat oder ob der Cookie-Zugriff noch beantragt werden muss.

- Wenn der Berechtigungsstatus `"granted"` ist, können wir beginnen, Cookies zu verwenden; `requestStorageAccessFor()` wurde bereits aufgerufen, sodass es nicht erneut aufgerufen werden muss.
- Wenn der Berechtigungsstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb einer Benutzeraktion, wie eines Buttonklicks, aufrufen.

Nachdem die Berechtigung `"top-level-storage-access"` erteilt wurde, werden Cross-Site-Anfragen Cookies einschließen, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) enthalten, sodass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

Beispielsweise:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```
